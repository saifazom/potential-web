import { Link } from "react-router";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link to="/" className="text-xl font-bold">
          React Starter
        </Link>
        <nav className="gap-4">
          <ul className="flex">
            <li>
              <Link to="/" className="hover:text-primary">
                Home page
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
      </div>
    </header>
  );
}
