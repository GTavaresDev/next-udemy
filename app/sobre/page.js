import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p>This is the about page.</p>
        <div>
          <h2>
            <Link href="/">
              Home
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
