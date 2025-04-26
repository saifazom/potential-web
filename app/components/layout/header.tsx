import { Link } from "react-router";
import siteLogo from "../../assets/img/site-logo.svg";

export default function Header() {
  const menuData = [
    {
      label: "Services",
      to: "/services",
      submenu: [
        [
          { label: "E-commerce", to: "/e-commerce", number: "01" },
          { label: "Healthcare", to: "/healthcare", number: "02" },
          { label: "Education", to: "/education", number: "03" },
          { label: "Software", to: "/software", number: "04" },
          { label: "Real Estate", to: "/real-estate", number: "05" },
          {
            label: "Logistics & Fulfilment",
            to: "/logistics-&-fulfilment",
            number: "06",
          },
        ],
        [
          {
            label: "Transport & Travel",
            to: "/transport-&-travel",
            number: "07",
          },
          { label: "Startup", to: "/startup", number: "08" },
          { label: "Automotive", to: "/automotive", number: "09" },
          { label: "Services", to: "/services", number: "10" },
          {
            label: "Printing Services",
            to: "/printing-services",
            number: "11",
          },
          { label: "E-commerce", to: "/e-commerce", number: "12" },
        ],
      ],
    },
    {
      label: "About Us",
      to: "/about",
      submenu: [
        [
          { label: "E-commerce", to: "/e-commerce", number: "01" },
          { label: "Healthcare", to: "/healthcare", number: "02" },
          { label: "Education", to: "/education", number: "03" },
          { label: "Software", to: "/software", number: "04" },
          { label: "Real Estate", to: "/real-estate", number: "05" },
          {
            label: "Logistics & Fulfilment",
            to: "/logistics-&-fulfilment",
            number: "06",
          },
        ],
        [
          {
            label: "Transport & Travel",
            to: "/transport-&-travel",
            number: "07",
          },
          { label: "Startup", to: "/startup", number: "08" },
          { label: "Automotive", to: "/automotive", number: "09" },
          { label: "Services", to: "/services", number: "10" },
          {
            label: "Printing Services",
            to: "/printing-services",
            number: "11",
          },
          { label: "E-commerce", to: "/e-commerce", number: "12" },
        ],
      ],
    },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Career", to: "/career" },
    { label: "Blog", to: "/blog" },
  ];
  return (
    <header id="header" className="o-section o-section--header">
      <div className="container mx-auto relative py-6 mt-4 ">
        <div className="flex-items-center justify-between">
          <Link to="/">
            <img src={siteLogo} alt="Site Logo" />
          </Link>
          <nav className="max-lg:hidden">
            <ul>
              {menuData.map(({ label, to, submenu }) => (
                // const { label, to, submenu } = item;
                <li key={label}>
                  <Link to={to}>{label}</Link>
                  {submenu && (
                    <div className="u-dropdown">
                      {submenu.map((submenuCol, colIdx) => (
                        <ul key={colIdx}>
                          {submenuCol.map((sub, subIdx) => (
                            <li key={sub.label}>
                              <Link to={sub.to}>
                                <span>{sub.number}</span> {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <button className="u-button--violate">Let's Talk</button>
        </div>
      </div>
    </header>
  );
}
