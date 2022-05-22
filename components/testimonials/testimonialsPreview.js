import React from "react";
import Link from "next/link";

export default function TestimonialsPreview() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
        <div className="mb-14 xl:mb-0">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold font-serif leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">
            Our customers love what we do
          </h1>
          <p className="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">
            Over 500 companies use our product to understand their business and
            marketing better.
          </p>
          <Link href="/testimonials">
            <a className="hidden md:block w-56 mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon items-start justify-center px-8 py-4 bg-maroon hover:bg-maroon-dark rounded text-base font-medium leading-none text-center text-white">
              Read success stories
            </a>
          </Link>
        </div>
        <div
          role="list"
          aria-label="Testimonials"
          className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start"
        >
          <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
            <div className="h-3 text-3xl text-left text-maroon font-serif">
              “
            </div>
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  Shaun and his team have been great to work with at every
                  level: responsive, agreeable, on the ball, coming up with
                  ideas and solutions to fit my requirements, and then executing
                  efficiently and quickly, and at a very reasonable price.
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Tony and Michal Leon
                </p>
              </div>
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png"
                alt="Display Avatar of Anna Smith"
                role="img"
              />
            </div>
          </div>
          <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
            <div className="h-3 text-3xl text-left text-maroon font-serif">
              “
            </div>
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  My wife and I have built many homes both overseas and locally
                  and never before have we come across such an amazing couple,
                  Shaun and Michelle! They were simply amazing not only in their
                  ideas but support as well. Building a home so far away from
                  South Africa is never an easy task but having Shaun and
                  Michelle in our corner was a Godsend and we absolutely love
                  the finished product. We are both very proud to be associated
                  with Core Interiors and would recommend them without
                  hesitation to anyone who asked.
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  David and Debbie Power
                </p>
              </div>
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png"
                alt="Display avatar of Dany John"
                role="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
