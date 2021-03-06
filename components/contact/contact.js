import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSumbit = () => {
    emailjs
      .send(
        "service_js4chue",
        "template_oosp1ti",
        {
          from_name: name,
          to_name: "info@coreinteriors.co.za",
          message: message,
          reply_to: email,
        },
        "user_AvdqkQRo1Tj2mPGvjiX7N"
      )
      .then((result) => {
        console.log(
          `%c ${result.status}: ${result.text}`,
          "background-color: green"
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(`%c ${error}`, "background-color: red");
      });
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="bg-white rounded lg:px-28 px-8">
          <div className="md:flex items-center mt-6">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Name
              </label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input  name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8"></div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">
                Message
              </label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                role="textbox"
                type="name"
                className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                defaultValue={""}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div className="flex items-center justify-center w-full">
            <button
              className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-maroon rounded hover:bg-maroon-dark focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
              onClick={() => handleSumbit()}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
