import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Home/Head";
import about from "../../src/assets/about.jpg";

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome To Netflix
              </h3>{" "}
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
                  sed Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nun sed Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nun sed Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nun sed Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nun sed Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Nun sed Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Nun sed.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
                  sed Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nun sed Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nun sed Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nun sed Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nun sed Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Nun sed Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Nun sed.
                </p>{" "}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-dry rounded-lg text-white">
                    <span className="text-3xl block font-extrabold">10k</span>
                    <h4 className="text-lg font-semibold my-2">
                      Listed Movies
                    </h4>
                    <p className="mb-0 text-text leading-5 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>

                  <div className="p-6 bg-dry rounded-lg text-white">
                    <span className="text-3xl block font-extrabold">8k</span>
                    <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                    <p className="mb-0 text-text leading-5 text-sm">
                      Completely free, without registration, Lorem ipsum dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div>
              <img
                src={about}
                alt="about-us"
                className="w-full xl:block hidden h-header rounded-lg object-cover"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
