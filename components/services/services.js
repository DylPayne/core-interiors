import React from "react";

const services = [
  {
    title: "Kitchens",
    subtitle: "The heart of your home",
    desc: `Core Cabinets & Interiors specialise in kitchen designs, renovations, kitchen manufacturing and kitchen installations. Our kitchens are constructed from the highest quality materials available in the country and abroad and we have a large selection of countertops, doors and finishes to choose from.

      Each kitchen is individually hand crafted with direct customer involvement throughout the design process  to ensure satisfaction.
      
      Although Core Interiors specialise in clean Modern kitchen designs, we also offer a very broad range of finishes and concepts be it Classical, Country or Contemporary. Whatever your taste might be, our kitchen designer will undertake to make your vision of a dream kitchen a reality while working to a budget you can afford.`,
    img: "/kitchen2.jpg",
  },
  {
    title: "Bedrooms",
    subtitle: "Cupboards, Shelving and Cabinets",
    desc: `Core Cabinets & Interiors offer the latest in cupboard accessories and ergonomics for your bedroom. As with all other Core cabinets, the client can select any type of material and style to be used for their built-in cabinets.

    We specialize in bespoke solutions for unusual spaces maximising storage, form and function. Apart from conventional cupboard doors we offer an extensive range of sliding door solutions as well as all laminates, Veneers, Sprayed satin, High gloss finishes and solid timber.
    
    `,
    img: "/kitchen2.jpg",
  },
  {
    title: "Bathrooms",
    subtitle: "Baths, Showers, Cabinets and Vanities",
    desc: `We offer design and layout services and will assist with your choice of fittings by accompanying you to our recommended suppliers. We specialize in the design, manufacture and installations of vanities and bathroom storage units.`,
    img: "/kitchen2.jpg",
  },
  {
    title: "Study & Offices",
    subtitle: "Your Personal Workspace",
    desc: `We can transform your home office or study with a variety of cabinet, storage and shelving options.

    In most families, the home office plays a wide variety of roles. If you work from home, it is your 9-to-5 place of business; for others, it’s a place to pay the bills, go through mail or store important documents.
    
    For kids, it’s a homework spot, or maybe the place to play hours and hours of computer games. It can be a library, a sitting room or just a quiet place for taking good naps.
    
    If you’re planning on renovating and redecorating your office we will help you make the most of this space whatever your needs, we can even custom build furniture and desks to suit your needs.`,
    img: "/kitchen2.jpg",
  },
  {
    title: "TV Cabinets",
    subtitle: "The heart of your home",
    desc: `Should you require a TV cabinet for your specific requirements and cannot find a solution to suit we can design and handcraft a bespoke solution that will exactly match your specifications. We have a large range of styles, materials and finishes to choose from.`,
    img: "/kitchen2.jpg",
  },

];

function Index() {
  return (
    <div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {services.map((service, i) => {
              return (
                <div
                  className="xl:w-2/5 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 lg:w-2/5 m-1"
                  key={i}
                >
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
                      <p className="text-left text-gray-600 text-base py-3 font-normal">
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
