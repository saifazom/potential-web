// import useEmblaCarousel from "embla-carousel-react";
// import AutoScroll from "embla-carousel-auto-scroll";

import Marquee from "react-fast-marquee";
import {
  clientLogo,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
} from "~/utils/ImageComponent";

// type Props = {
//   clientLogos: string[];
// };

// const ClientsLogo: React.FC<Props> = ({ clientLogos }) => {
//   return (
//     <Marquee speed={0} pauseOnHover gradient={false}>
//       {clientLogos.map((logo, index) => (
//         <div key={index} className="c-clients-logo__item">
//           <img src={logo} alt={`Client logo ${index}`} />
//         </div>
//       ))}
//     </Marquee>
//   );
// };

// export default ClientsLogo;

export default function ClientsLogo() {
  return (
    <Marquee speed={70} pauseOnHover gradient={false}>
      <div className="c-clients-logo__carousel">
        <div className="c-clients-logo__item">
          <img src={clientLogo} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo2} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo3} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo4} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo5} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo6} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo7} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo2} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo3} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo4} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo5} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo6} alt=" " />
        </div>
        <div className="c-clients-logo__item">
          <img src={clientLogo7} alt=" " />
        </div>
      </div>
    </Marquee>
  );
}
