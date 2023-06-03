import React from "react";

import { community } from "../data";

import CommunitySlider from "../components/CommunitySlider";

const Community = () => {
  const { icon, title, testimonials } = community;

  return (
    <section className="section relative lg:max-w-[1500px] lg:mx-auto">
      <div className="container mx-auto">
        <div className="flex">
          <div className="section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto">
            <img src={icon} alt="section icon" />
            <h2 className="h2 section-title">
              {title}
              <span className="text-primary-200">.</span>
            </h2>
          </div>
          <div className="absolute -right-[275px] lg:-right-[200px] w-[1000px] lg:w-[1140px] top-48 lg:top-0">
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
