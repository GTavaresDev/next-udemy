import { Suspense } from "react";
import ResumoBusca from "../../componentes/ResumoBusca";

function FallbackBusca() {
  return <p>Carregando busca...</p>;
}

export default function Page() {
  return (
    <main>
      <h1>useSearchParams com Suspense</h1>
      <Suspense fallback={<FallbackBusca />}>
        <ResumoBusca />
      </Suspense>
    </main>
  );
}
