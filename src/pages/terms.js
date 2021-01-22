import React from "react";

import PageWrapper from "../components/PageWrapper";

const Terms = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <button className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5">
                Start 14 Days Free Trial
              </button>
            </>
          ),
          footerStyle: "style3",
        }}
      >
        <div className="pt-23 pt-md-25 pt-lg-30 pb-9 pb-md-16 pb-lg-21">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-11">
                <div className="text-center">
                  <h2 className="font-size-11 mb-8">ea dolore et voluptate dolore id</h2>
                  <p className="font-size-7 mb-0">
                    Proident nisi sint deserunt cupidatat excepteur deserunt 
                    Fugiat reprehenderit dolor nostrud pariatur velit duis eiusmod minim.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 pr-lg-13 pr-xl-0">
                  <div className="pt-lg-17 pt-8">
                    <p className="font-size-5 heading-default-color mb-0">
                      Laboris minim anim laboris proident cillum ut qui consequat mollit est magna.
                      Culpa ex adipisicing laborum voluptate ex id tempor magna minim.
                      Lorem ea ut esse ad nisi ea anim adipisicing veniam pariatur.
                      Exercitation sunt ullamco non irure. Labore pariatur aliquip qui quis enim est irure excepteur mollit.
                      Irure consectetur quis sit laboris labore ipsum quis occaecat fugiat ad.
                    </p>
                    <div className="mt-9 mt-lg-11">
                      <h5 className="font-size-7 mb-7">License</h5>
                      <p className="font-size-5 heading-default-color">
                      Laboris minim anim laboris proident cillum ut qui consequat mollit est magna.
                      Culpa ex adipisicing laborum voluptate ex id tempor magna minim.
                      Lorem ea ut esse ad nisi ea anim adipisicing veniam pariatur.
                      Exercitation sunt ullamco non irure. Labore pariatur aliquip qui quis enim est irure excepteur mollit.
                      Irure consectetur quis sit laboris labore ipsum quis occaecat fugiat ad.
                      </p>
                    </div>
                    <div className="mt-9 mt-lg-13">
                      <h5 className="font-size-7 mb-7">
                        Culpa ex adipisicing laborum voluptate
                      </h5>
                      <p className="font-size-5 heading-default-color mb-9">
                      Laboris minim anim laboris proident cillum ut qui consequat mollit est magna.
                      Culpa ex adipisicing laborum voluptate ex id tempor magna minim.
                      Lorem ea ut esse ad nisi ea anim adipisicing veniam pariatur.
                      </p>
                      <p className="font-size-5 heading-default-color">
                        {" "}
                        Exercitation sunt ullamco non irure. Labore pariatur aliquip qui quis enim est irure excepteur mollit.
                        Irure consectetur quis sit laboris labore ipsum quis occaecat fugiat ad.
                        In Lorem ea eu id amet.Dolor dolor pariatur magna est minim ea officia incididunt qui dolor eu.
                      </p>
                    </div>
                    <div className="mt-9 mt-lg-13">
                      <h5 className="font-size-7 mb-7">Changes about terms</h5>
                      <p className="font-size-5 heading-default-color">
                       Culpa ex adipisicing laborum voluptate ex id tempor magna minim.
                       Lorem ea ut esse ad nisi ea anim adipisicing veniam pariatur.
                       Exercitation sunt ullamco non irure. Labore pariatur aliquip qui quis enim est irure excepteur mollit.
                       Irure consectetur quis sit laboris labore ipsum quis occaecat fugiat ad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Terms;
