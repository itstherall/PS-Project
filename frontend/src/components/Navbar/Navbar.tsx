import { Link, useNavigate, useSearchParams } from "react-router";
import { useState } from "react";
import "./navbar.css";

export function Navbar() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchBar, setSearchBar] = useState(searchParams.get("bucas") || "");

  return (
    <div className="header">
      <div className="head-container container">
        <button type="button" className="headerButton">
          <img src="icons/bookmark stacks.png" />
        </button>
        <form
          className="formPesquisa"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search?busca=${searchBar}`);
          }}
        >
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
