import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";

type Evento = {
  id: number;
  titulo: string;
  dataEvento: string;
  cidade: string;
  categoria: {
    id: number;
    nome: string;
  };
  totalFotos: number;
};

export function Search() {
  const [result, setResult] = useState<Evento[]>([]);

  useEffect(() => {
    (async () => {
      setResult([
        {
          id: 1,
          titulo: "Pedalada MTB",
          dataEvento: "2026-04-03T07:00:00",
          cidade: "Recife",
          categoria: { id: 2, nome: "Ciclismo" },
          totalFotos: 430,
        },
        {
          id: 2,
          titulo: "Pedalada 2",
          dataEvento: "2026-04-03T07:00:00",
          cidade: "Recife",
          categoria: { id: 2, nome: "Ciclismo" },
          totalFotos: 430,
        },
      ]);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <div className="search-results container">
        <label>Resultados de busca</label>
        <div className="search-results-grid">
          {result.map((evento) => (
            <div className="gallery-results" key={evento.id}>
              <img src="images/no image.webp" />
              <label>{evento.categoria.nome}</label>
              <label>{evento.titulo}</label>
              <label>
                {evento.cidade} - {evento.dataEvento}
              </label>
              <label>{evento.totalFotos} fotos</label>
              <button className="buttonAddCart">Visualizar Galeria</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
