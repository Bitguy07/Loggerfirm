import React, { useState } from "react";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    { question: "What is this page about?", answer: "This is the About Page with interactivity." },
    { question: "What technology is used?", answer: "This page is built with React and Tailwind CSS." },
    { question: "How can I learn more?", answer: "Explore the documentation and practice regularly!" },
  ];

  return (
    <div
      className={`${isDarkMode ? `bg-slate-900` : `bg-blue-200`} h-full w-full flex flex-col items-center`}
    >
      <h1 className={`${isDarkMode ? "text-white " : "text-black"
      } text-4xl font-bold mt-3 mb-3`}>About Us</h1>
      <button
        className={`mb-8 px-6 py-2 ${isDarkMode ? `bg-blue-200 text-black`:`bg-blue-500 text-white`}  rounded-lg hover:bg-blue-600 transition-all`}
        onClick={toggleDarkMode}
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="w-full max-w-md space-y-1 mx-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow hover:shadow-lg transition-all"
          >
            <div
              className="font-semibold cursor-pointer flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span>{activeQuestion === index ? "▲" : "▼"}</span>
            </div>
            {activeQuestion === index && <p className="mt-3 text-sm">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
