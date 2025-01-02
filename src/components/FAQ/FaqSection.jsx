import React, { useState } from "react";

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Over Token Creator?",
      answer: "The Over Token Creator is a platform to create over tokens.",
    },
    {
      question: "Is it Safe to Create Over Tokens here?",
      answer: "Yes, it is safe to create Over tokens on this platform.",
    },
    {
      question: "How much time will the Over Token Creator Take?",
      answer: "It takes about 5 minutes to create a token using the platform.",
    },
    {
      question: "How much does it cost?",
      answer: "Creating Over tokens is free of charge.",
    },
    {
      question: "Which wallet can I use?",
      answer:
        "You can use any Over-compatible wallet such as Okx, Metamask, etc.",
    },
    {
      question: "How many tokens can I create for each decimal amount?",
      answer: "You can create up to 1 billion tokens per decimal amount.",
    },
  ];

  return (
    <div className="container mx-auto p-6 w-[80%] mt-[10%]">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Frequently Asked Questions
      </h1>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="border-b border-gray-600 py-3 cursor-pointer"
          >
            <div
              className="flex justify-between items-center text-white"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  open === index ? "rotate-180" : "rotate-0"
                }`}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-2.879a1 1 0 011.414 1.414l-4 3.5a1 1 0 01-1.414 0l-4-3.5a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {/* Smooth Transition for the Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                open === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="mt-2 text-sm text-gray-400">{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;
