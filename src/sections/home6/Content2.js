import React from "react";

import imgM from "../../assets/image/home-6/png/content-2-mobile.png";
import imgS from "../../assets/image/home-6/png/yellow-small-shape.png";

const Content2 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          {/* Content Section */}
          <div className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
            <div className="pt-7 pb-7 pr-sm-5 pr-md-9 pr-lg-0 mt-lg-30">
              <h2
                className="font-size-11 mb-9 pr-sm-18 pr-md-10 pr-lg-5 pr-xl-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Enim nulla elit proident reprehenderit
              </h2>
              <p
                className="font-size-7 mb-0"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Aute magna sit nisi sint.Est culpa non do nostrud dolore mollit eu enim.
                Est culpa non do nostrud dolore mollit eu enim.
              </p>
            </div>
          </div>
          {/* Content Image Section */}
          <div className="col-xl-6 offset-xl-1 col-xs-6 order-1 order-lg-2">
            <div className="l6-content-image-group-2">
              <div className="img-1">
                <img
                  className="w-100"
                  src={imgS}
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay={700}
                />
              </div>
              <div className="img-2">
                <img
                  className="w-100"
                  src={imgM}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
