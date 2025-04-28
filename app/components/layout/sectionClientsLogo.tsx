import React, { Suspense, lazy } from "react";
const ClientsLogo = lazy(() => import("~/components/clientsLogoMarquee"));

const SectionClientsLogo = () => {
  return (
    <section id="clients-logo" className="o-section o-section--clients-logo">
      <div className="c-clients-logo">
        <h2 className="c-clients-logo__title fadeInUp">
          <strong>Over 100+</strong> companies trust us
        </h2>

        <div className="fadeInUp">
          <Suspense fallback={<div className="flex-center">Loading...</div>}>
            <ClientsLogo />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SectionClientsLogo;
