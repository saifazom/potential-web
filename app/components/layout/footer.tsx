import { Link } from "react-router";
import {
  locationMap1,
  locationMap2,
  locationMap3,
  footerLogo,
  footerLogoLarge,
} from "~/utils/ImageComponent";
export default function Footer() {
  return (
    <footer id="footer" className="o-section o-section--footer">
      <div className="c-footer">
        <div className="container mx-auto">
          <div className="c-footer__wrap">
            <div className="c-footer-location">
              <div className="c-footer-location__item">
                <div className="c-footer-location__icon">
                  <img src={locationMap1} alt="" />
                </div>
                <h3 className="c-footer-location__title">HQ - South Korea</h3>
                <p>
                  WEWORK 4F, 147, Yanghwa-ro Mapo-guSeoul, Korea
                  <Link to="tel:+8210-2706-1463">+82 10-2706-1463</Link>
                </p>
                <Link
                  className="c-footer-location__link"
                  to="mailto:contact@potentialai.com"
                >
                  contact@potentialai.com
                </Link>
              </div>
              <div className="c-footer-location__item">
                <div className="c-footer-location__icon">
                  <img src={locationMap2} alt="" />
                </div>
                <h3 className="c-footer-location__title">HQ - South Korea</h3>
                <p>
                  WEWORK 4F, 147, Yanghwa-ro Mapo-guSeoul, Korea
                  <Link to="tel:+8210-2706-1463">+82 10-2706-1463</Link>
                </p>
                <Link
                  className="c-footer-location__link"
                  to="mailto:contact@potentialai.com"
                >
                  contact@potentialai.com
                </Link>
              </div>
              <div className="c-footer-location__item">
                <div className="c-footer-location__icon">
                  <img src={locationMap3} alt="" />
                </div>
                <h3 className="c-footer-location__title">HQ - South Korea</h3>
                <p>
                  WEWORK 4F, 147, Yanghwa-ro Mapo-guSeoul, Korea{" "}
                  <Link to="tel:+8210-2706-1463">+82 10-2706-1463</Link>
                </p>
                <Link
                  className="c-footer-location__link"
                  to="mailto:contact@potentialai.com"
                >
                  contact@potentialai.com
                </Link>
              </div>
            </div>
            {/* /-- Footer Locations -- */}

            <div className="c-footer-bottom">
              <div className="c-footer-bottom__col">
                <div className="c-footer-bottom__logo">
                  <Link className="c-footer__logo" to="/">
                    <img src={footerLogo} alt="Site Logo" />
                  </Link>
                  <p>
                    Potential is a leading design and development company,
                    creating user-focused websites, scalable apps, and seamless
                    digital experiences to help businesses succeed.
                  </p>
                </div>
              </div>
              <div className="c-footer-bottom__col">
                <div className="c-footer-bottom__text">
                  <h3 className="c-footer-bottom__title">Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/">Our Service</Link>
                    </li>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/">Terms & conditions</Link>
                    </li>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Career</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="c-footer-bottom__col">
                <div className="c-footer-bottom__text">
                  <h3 className="c-footer-bottom__title">Follow us</h3>
                  <ul>
                    <li>
                      <Link to="/">Linkedin</Link>
                    </li>
                    <li>
                      <Link to="/">Facebook</Link>
                    </li>
                    <li>
                      <Link to="/">X Twitter</Link>
                    </li>
                    <li>
                      <Link to="/">Instagram</Link>
                    </li>
                    <li>
                      <Link to="/">Youtube</Link>
                    </li>
                    <li>
                      <Link to="/">Behance</Link>
                    </li>
                    <li>
                      <Link to="/">Dribble</Link>
                    </li>
                    <li>
                      <Link to="/">TIkTok</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /-- Footer Bottom -- */}

            <p className="c-footer__copyright">
              © Potential 2025 / Elevate your digital presence.
            </p>
            <div className="c-footer__large-logo">
              <img src={footerLogoLarge} alt="Footer Logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
