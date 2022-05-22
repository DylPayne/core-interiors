const testimonials = [
  {
    text: "Nadia, I want to thank you for all your hard work with the project. I appreciate you, sharing your expertise, listening attentively to my needs and preferences and demonstrating flexibility to ensure a beautiful and functional design, which not only enhances the main bedroom, but complements the rest of my house. Your commitment, patience and customer orientation was exceptional. The workmanship of the cupboards were of a high standard and I appreciated that you, Shaun and Michelle popped in during the installation.",
    author: "Carien Ras",
  },
  {
    text: "Hi Nadia Thank you for doing such a wonderful job. It was a pleasure to work with you: you had good ideas, a good sense of reading the client, were professional and always seemed to do what you said you would do when you said you would do it. I hope your business continues to be a success.",
    author: "Paul and June Savage",
  },
  {
    text: "Thank you for the beautiful job you did with our kitchen installation. It really is spectacular and looks exactly how we pictured it. We look forward to working with you on future jobs for other clients.",
    author: "Harrold and Leora Hessen",
  },
  {
    text: "My wife and I have built many homes both overseas and locally and never before have we come across such an amazing couple, Shaun and Michelle! They were simply amazing not only in their ideas but support as well. Building a home so far away from South Africa is never an easy task but having Shaun and Michelle in our corner was a Godsend and we absolutely love the finished product. We are both very proud to be associated with Core Interiors and would recommend them without hesitation to anyone who asked.",
    author: "David and Debbie Power",
  },
  {
    text: "I have enjoyed working with you all through this project, and wish you every success in your business.  Its great to be with a family owned, personal company where a client becomes a friend.",
    author: "Bydie",
  },
  {
    text: "Shaun and his team have been great to work with at every level:  responsive, agreeable, on the ball, coming up with ideas and solutions to fit my requirements, and then executing efficiently and quickly, and at a very reasonable price.",
    author: "Tony and Michal Leon",
  },
  {
    text: "As an architect specialising in residential renovations, I have completed several kitchen and joinery projects with Core Interiors. They have become my joiner of choice, so much so that I had them install my own kitchen recently, for which I have received many compliments. I look forward to continuing my relationship with Core Interiors and will always recommend them to my clients for quality, workmanship and personal service – a real pleasure to work with",
    author: "Louise van Riet",
  },
  {
    text: "We appreciated your suggestions regarding the design of our kitchen. We were impressed with your willingness in helping us decide on the colour to use on the cupboards, and then not complaining when we ended up painting them white! The project may have taken a little longer than we anticipated, but we know that you and Daniel did a thorough job. You were reliable – coming to site when you said you would. You used high quality materials and we are very happy with the end result. We would certainly use you again.",
    author: "Brian and Lesley Low",
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
