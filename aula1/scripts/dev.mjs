import { existsSync, readFileSync, readlinkSync, rmSync } from "node:fs";
import { spawn } from "node:child_process";
import { join } from "node:path";

const lockPath = join(process.cwd(), ".next", "dev", "lock");
const nextBin = join(process.cwd(), "node_modules", ".bin", "next");

function isActiveNextDevServer(pid) {
  if (!Number.isInteger(pid) || pid <= 0) {
    return false;
  }

  try {
    process.kill(pid, 0);
  } catch {
    return false;
  }

  try {
    const cwd = readlinkSync(`/proc/${pid}/cwd`);
    const cmdline = readFileSync(`/proc/${pid}/cmdline`, "utf8").replaceAll(
      "\u0000",
      " ",
    );

    return cwd === process.cwd() && /\bnext(\s|$).*?\bdev\b/.test(cmdline);
  } catch {
    return false;
  }
}

if (existsSync(lockPath)) {
  try {
    const lock = JSON.parse(readFileSync(lockPath, "utf8"));

    if (!isActiveNextDevServer(lock.pid)) {
      rmSync(lockPath, { force: true });
      console.log(`Removed stale Next dev lock for PID ${lock.pid}.`);
    }
  } catch (error) {
    rmSync(lockPath, { force: true });
    console.warn("Removed unreadable Next dev lock.", error);
  }
}

const child = spawn(nextBin, ["dev"], {
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
