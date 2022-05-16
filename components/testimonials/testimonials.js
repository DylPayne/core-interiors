const testimonials = [
  {
    text: "This website has a bunch of amazing components which improves my design",
    author: "Dylan Payne",
  },
  {
    text: "This website has a bunch of amazing components which improves my design",
    author: "Dylan Payne",
  },
  {
    text: "This website has a bunch of amazing components which improves my design",
    author: "Dylan Payne",
  },
  {
    text: "This website has a bunch of amazing components which improves my design",
    author: "Dylan Payne",
  },
  {
    text: "This website has a bunch of amazing components which improves my design",
    author: "Dylan Payne",
  },
  {
    text: "This website has a bunch of amazing components which improves my design",
    author: "Dylan Payne",
  },
  {
    text: "This website has a bunch of amazing components which improves my design",
    author: "Dylan Payne",
  },
  {
    text: "This website has a bunch of amazing components which improves my design",
    author: "Dylan Payne",
  },
];

export default function Testimonials() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8 lg:flex lg:items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((item, i) => {
            return (
              <div
                role="listitem"
                className="bg-white drop-shadow-md rounded p-4 xl:p-8"
                key={i}
              >
                <div className="h-3 text-3xl text-left text-maroon font-serif">
                  “
                </div>
                <div className="pl-4 pt-4 flex items-start justify-between">
                  <div className="mr-6">
                    <p className="xl:text-xl xl:leading-loose text-gray-600">
                      {item.text}
                    </p>
                    <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
