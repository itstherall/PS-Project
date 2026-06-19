import { Link } from "react-router";
import { useState } from "react";
import "./navbar.css";

export function Navbar() {
  const [searchBar, setSearchBar] = useState("");

  return (
    <div className="header">
      <div className="head-container container">
        <button type="button" className="headerButton">
          <img src="icons/bookmark stacks.png" />
        </button>
        <form action="/search" method="get" className="formPesquisa">
          <input
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
            placeholder="Pesquisar..."
            required
          />
          <button type="submit" className="headerButton">
            <img src="icons/search.png" />
          </button>
        </form>
        <button type="button" className="headerButton">
          <img src="icons/add shopping cart.png" />
        </button>
        <Link to="/login">
          <button type="button" className="headerButton">
            <img src="icons/login.png" />
          </button>
        </Link>
      </div>
    </div>
  );
}
