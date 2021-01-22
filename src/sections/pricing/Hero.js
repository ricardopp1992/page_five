import React from "react";

const Hero = () => {
  return (
    <div className="pt-23 pt-md-26 pt-lg-28">
      <div className="container">
        {/* Section Padding */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div
              className="text-center mb-10 mb-lg-23"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={500}
            >
              <h2 className="font-size-11 mb-7">Dolor esse ullamco</h2>
              <p className="font-size-7 mb-0">
                Excepteur quis voluptate quis voluptate labore laborum duis
                reprehenderit Lorem anim in laboris.
              </p>
            </div>
          </div>
        </div>
        {/* End Section Padding */}
      </div>
    </div>
  );
};

export default Hero;
