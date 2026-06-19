import "./home.css";
import { Navbar } from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <img src="images/running4.jpg" alt="foto de corrida" />
        <label>Encontre as melhores fotos esportivas</label>
      </div>
      <div className="main container">
        <div className="category container">
          <label>Categorias</label>
        </div>
        <div className="gallery">
          <div className="category-card">
            <img src="images/basket.jpg" alt="foto esportiva" />{" "}
            <label>Basquete</label>
          </div>

          <div className="category-card">
            <img src="images/cycling.jpg" alt="foto esportiva" />{" "}
            <label>Ciclismo</label>
          </div>

          <div className="category-card">
            <img src="images/football stadium.jpg" alt="foto esportiva" />
            <label>Estádio de Futebol</label>
          </div>

          <div className="category-card">
            <img src="images/race track.jpg" alt="foto esportiva" />
            <label>Pista de Corrida</label>
          </div>

          <div className="category-card">
            <img src="images/running.jpg" alt="foto esportiva" />
            <label>Corrida</label>
          </div>

          <div className="category-card">
            <img src="images/running2.jpg" alt="foto esportiva" />
            <label>Corrida</label>
          </div>

          <div className="category-card">
            <img src="images/snow board.jpg" alt="foto esportiva" />
            <label>Snow Board</label>
          </div>

          <div className="category-card">
            <img src="images/soccer ball.jpg" alt="foto esportiva" />
            <label>Bola de Futebol</label>
          </div>

          <div className="category-card">
            <img src="images/soccer field.jpg" alt="foto esportiva" />
            <label>Campo de Futebol</label>
          </div>

          <div className="category-card">
            <img src="images/swimming.jpg" alt="foto esportiva" />
            <label>Natação</label>
          </div>

          <div className="category-card">
            <img src="images/tennis.jpg" alt="foto esportiva" />
            <label>Tênis</label>
          </div>

          <div className="category-card">
            <img src="images/running3.jpg" alt="foto esportiva" />
            <label>Corrida</label>
          </div>
        </div>
      </div>
      <div className="footer container">
        <label>Uma nota, no rodapé.</label>
      </div>
    </>
  );
}

export default Home;
