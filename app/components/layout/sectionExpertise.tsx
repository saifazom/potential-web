import React from "react";
import { Link } from "react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { accourdionImg1 } from "~/utils/ImageComponent";

const accordionData = [
  {
    title: "UI/UX Design",
    content: {
      text1: "Frontend Development (React, Angular, Vue.js)",
      text2: "Backend Development (Node.js, Python, PHP)",
      text3: "Custom Web Applications",
      buttonLabel: "Learn More",
      buttonLink: "#",
    },
  },
  {
    title: "Web Development",
    content: {
      text1: "Frontend Development (React, Angular, Vue.js)",
      text2: "Backend Development (Node.js, Python, PHP)",
      text3: "Custom Web Applications",
      buttonLabel: "Learn More",
      buttonLink: "#",
    },
  },
  {
    title: "Mobile App Development",
    content: {
      text1: "Frontend Development (React, Angular, Vue.js)",
      text2: "Backend Development (Node.js, Python, PHP)",
      text3: "Custom Web Applications",
      buttonLabel: "Learn More",
      buttonLink: "#",
    },
  },
];

const SectionExpertise = () => {
  return (
    <section
      id="expertise-area"
      className="o-section o-section--expertise-area"
    >
      <div className="c-expertise-area">
        <div className="container mx-auto">
          <div className="c-expertise-area__header">
            <h3 className="u-small-title fadeInUp">Our expertise areas</h3>
            <h2 className="u-title fadeInUp">
              Tailored Software, Built by Experts to Drive 10x Growth.
            </h2>
          </div>
          {/* /-- Header -- */}

          <Accordion type="single" collapsible className="c-accordion">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="c-accordion__item fadeInUp"
              >
                <AccordionTrigger className="c-accordion__title">
                  <span>{(index + 1).toString().padStart(2, "0")}</span>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="c-accordion__content">
                  <div className="c-accordion__body">
                    <div className="c-accordion__text">
                      <ul>
                        <li>{item.content.text1}</li>
                        <li>{item.content.text2}</li>
                        <li>{item.content.text3}</li>
                      </ul>

                      <Link to="/" className="c-accordion__btn u-button">
                        Learn More
                      </Link>
                    </div>
                    <div className="c-accordion__img">
                      <img src={accourdionImg1} alt="Accordion Img 1" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SectionExpertise;
