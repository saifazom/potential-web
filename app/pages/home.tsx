import type { Route } from "../pages/+types/home";
import PageWithAnimations from "~/components/gsapAnim";

// Sections Import
import SectionHero from "~/components/layout/sectionHero";
import SectionGridVideo from "~/components/layout/sectionGridVideo";
import SectionClientsLogo from "~/components/layout/sectionClientsLogo";
import SectionAchievements from "~/components/layout/sectionAchievements";
import SectionHeadlineCarousel from "~/components/layout/sectionHeadlineCarousel";
import SectionHeadlineCarousel2 from "~/components/layout/sectionHeadlineCarousel2";
import SectionCaseStudies from "~/components/layout/sectionCaseStudies";
import SectionExpertise from "~/components/layout/sectionExpertise";
import SectionTestimonials from "~/components/layout/sectionTestimonials";
import SectionOurStory from "~/components/layout/sectionOurStory";
import SectionCTA from "~/components/layout/sectionCTA";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "New React Router App",
      name: "description",
      content: "Welcome to React Router!",
    },
  ];
}

export default function Home() {
  return (
    <>
      <PageWithAnimations />
      <SectionHero />
      {/* <--! End Hero Section --> */}
      <SectionGridVideo />
      {/* <--! End Video Grid Section --> */}
      <SectionClientsLogo />
      {/* <--! End CLient Logo Section --> */}
      <SectionAchievements />
      {/* <--! End Our Achievements Section --> */}
      <SectionHeadlineCarousel />
      {/* <--! End Headline Slider Section --> */}
      <SectionCaseStudies />
      {/* <--! End Case Studies Section --> */}
      <SectionExpertise />
      {/* <--! End Expertise Area Section --> */}
      <SectionHeadlineCarousel2 />
      {/* <--! End Headline Carosel Section2 --> */}
      <SectionTestimonials />
      {/* <--! End Testimonials Section --> */}
      <SectionOurStory />
      {/* <--! End Our Story Section --> */}
      <SectionCTA />
      {/* <--! End CTA Section --> */}
    </>
  );
}
