import { Link } from "react-router";
import siteLogo from "../../assets/img/site-logo.svg";

export default function Header() {
  return (
    <header className="mt-10">
      <div className="container lg:max-xl:flex flex h-16 items-center justify-between mx-auto px-4">
        <Link to="/">
          <img src={siteLogo} alt="Site Logo" />
        </Link>

        <nav className="gap-4">
          <ul className="flex">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-primary">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <button className="lg:text-[100px] md:text-[50px] sm:text-[30px] text-[10px] bg-black text-white">
          Let's Talk
        </button>
      </div>
    </header>
  );
}
