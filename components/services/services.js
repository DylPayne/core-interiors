import React from "react";

const services = [
  {
    title: "Kitchens",
    subtitle: "The heart of your home",
    desc: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    img: "/kitchen2.jpg",
  },
  {
    title: "Kitchens",
    subtitle: "The heart of your home",
    desc: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    img: "/kitchen2.jpg",
  },
  {
    title: "Kitchens",
    subtitle: "The heart of your home",
    desc: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    img: "/kitchen2.jpg",
  },
  {
    title: "Kitchens",
    subtitle: "The heart of your home",
    desc: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    img: "/kitchen2.jpg",
  },
  {
    title: "Kitchens",
    subtitle: "The heart of your home",
    desc: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    img: "/kitchen2.jpg",
  },
  {
    title: "Kitchens",
    subtitle: "The heart of your home",
    desc: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    img: "/kitchen2.jpg",
  },
];

function Index() {
  return (
    <div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {services.map((service) => {
              return (
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-lg">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={service.img}
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        {service.title}
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        {service.subtitle}
                      </p>
                      <p className="text-center text-gray-600 text-base py-3 font-normal">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
