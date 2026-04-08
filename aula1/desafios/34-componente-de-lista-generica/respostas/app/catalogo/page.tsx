import { produtos } from "./data/produtos";
import CardCatalogo from "../../componentes/CardCatalogo";
export default function Page() {
  return (
    <main>
      <h1>Catalogo</h1>
      
      <section>
        {produtos.map((item) =>
          <CardCatalogo key={item.id} {...item} />
        )}
      </section>
    </main>
  );
}
