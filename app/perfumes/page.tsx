import React from "react";
import Link from "next/link";
import { perfums } from "./data/perfums";

const PerfumesPage = () => {
  return (
    <div>
      <h1>Lista de Perfumes: </h1>
      <ul>
        <Link href={`/perfumes/${perfums.id}`}>Name: {perfums.name}</Link>
      </ul>
    </div>
  );
};     

export default PerfumesPage;
