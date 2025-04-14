import { Link } from "react-router";
import siteLogo from "../../assets/img/site-logo.svg";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto relative py-6 mt-4 ">
        <div className="flex-items-center justify-between px-4">
          <Link to="/">
            <img src={siteLogo} alt="Site Logo" />
          </Link>

          <nav className="max-lg:hidden">
            <ul>
              <li>
                <Link to="/services">Services</Link>

                <div className="u-dropdown">
                  <ul>
                    <li>
                      <Link to="/e-commerce">
                        <span>01</span> E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link to="/healthcare">
                        <span>02</span> Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link to="/education">
                        <span>03</span> Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/software">
                        <span>04</span> Software
                      </Link>
                    </li>
                    <li>
                      <Link to="/real-estate">
                        <span>05</span> Real Estate
                      </Link>
                    </li>
                    <li>
                      <Link to="/logistics-&-fulfilment">
                        <span>06</span> Logistics & Fulfilment
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/transport-&-travel">
                        <span>07</span> Transport & Travel
                      </Link>
                    </li>
                    <li>
                      <Link to="/startup">
                        <span>08</span> Startup
                      </Link>
                    </li>
                    <li>
                      <Link to="/automotive">
                        <span>09</span> Automotive
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <span>10</span> Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/printing-services">
                        <span>11</span> Printing Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/e-commerce">
                        <span>12</span> E-commerce
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>

                <div className="u-dropdown">
                  <ul>
                    <li>
                      <Link to="/e-commerce">
                        <span>01</span> E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link to="/healthcare">
                        <span>02</span> Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link to="/education">
                        <span>03</span> Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/software">
                        <span>04</span> Software
                      </Link>
                    </li>
                    <li>
                      <Link to="/real-estate">
                        <span>05</span> Real Estate
                      </Link>
                    </li>
                    <li>
                      <Link to="/logistics-&-fulfilment">
                        <span>06</span> Logistics & Fulfilment
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/transport-&-travel">
                        <span>07</span> Transport & Travel
                      </Link>
                    </li>
                    <li>
                      <Link to="/startup">
                        <span>08</span> Startup
                      </Link>
                    </li>
                    <li>
                      <Link to="/automotive">
                        <span>09</span> Automotive
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <span>10</span> Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/printing-services">
                        <span>11</span> Printing Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/e-commerce">
                        <span>12</span> E-commerce
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>

          <button className="u-button-violate">Let's Talk</button>
        </div>
      </div>
    </header>
  );
}
