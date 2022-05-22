import {
  DesktopComputerIcon,
  MoonIcon,
  UserIcon,
  TemplateIcon
} from "@heroicons/react/outline";

const features = [
  {
    name: "Kitchens",
    description:
      "Core Cabinets & Interiors specialise in kitchen designs, renovations, kitchen manufacturing and kitchen installations. Our kitchens are constructed from the highest quality materials available in the country and abroad and we have a large selection of countertops, doors and finishes to choose from.",
    icon: TemplateIcon,
  },
  {
    name: "Bathrooms",
    description:
      "We offer design and layout services and will assist with your choice of fittings by accompanying you to our recommended suppliers. We specialize in the design, manufacture and installations of vanities and bathroom storage units.",
    icon: UserIcon,
  },
  {
    name: "Bedrooms",
    description:
      "Core Cabinets & Interiors offer the latest in cupboard accessories and ergonomics for your bedroom. As with all other Core cabinets, the client can select any type of material and style to be used for their built-in cabinets.",
    icon: MoonIcon,
  },
  {
    name: "Study & Offices",
    description:
      "In most families, the home office plays a wide variety of roles. If you work from home, it is your 9-to-5 place of business; for others, it’s a place to pay the bills, go through mail or store important documents.",
    icon: DesktopComputerIcon,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-maroon font-semibold tracking-wide uppercase">
            Interiors
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">
            Your home is a reflection of you
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-maroon text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
