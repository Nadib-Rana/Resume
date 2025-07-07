import { useEffect, useState } from "react";

const Summary = () => {
  const [summaryText, setSummaryText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("userSummary");
    if (saved) setSummaryText(saved);
  }, []);

  return (
    <div className="">
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2">SUMMARY</h2>
      <p className="text-justify border-t-2 pt-2 text-gray-800 leading-relaxed">
        {summaryText ||
          "A results-oriented and skilled Computer Science and Engineering student with a strong command of modern web development technologies, including React.js, Node.js, and MongoDB. Eager to apply practical project experience, robust problem-solving abilities, and a collaborative mindset to contribute to dynamic software development and quality assurance roles."}
      </p>
    </div>
  );
};

export default Summary;