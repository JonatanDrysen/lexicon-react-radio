import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
        <div className="navbarContainer">
            <h1>Sveriges Radio</h1>
            <ul className="navbarList">
                <li className="navbarItem">
                    <Link to={"/channels"}>Alla kanaler</Link>
                </li>
                <li className="navbarItem">
                    <Link to={"/categories"}>Kategorier</Link>
                </li>
                <li className="navbarItem">
                    <Link to={"/favorites"}>Favoriter</Link>
                </li>
                <li className="navbarItem">
                    <Link to={"/search"}>Sök program</Link>
                </li>
            </ul>
        </div>
    </>
  )
}
