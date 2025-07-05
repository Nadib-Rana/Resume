import { useState } from "react";

const Summary = () => {
  const [summary, setSummary] = useState({ summary: '' });

  const handleChange = (e) => {
    setSummary({ summary: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Fill Up Your Summary
      </h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="summary" className="block mb-2 text-lg font-medium text-gray-700">
          Summary:
        </label>
        <textarea
          name="summary"
          id="summary"
          rows={5}
          placeholder="Write a brief summary about yourself..."
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          required
          autoFocus
          autoComplete="off"
          pattern=".{10,}"
          title="Please enter at least 10 characters for the summary."
          value={summary.summary}
          onChange={handleChange}
        ></textarea>
        <p className="text-sm text-gray-500 mt-1">
          {summary.summary.length} / 500 characters
        </p>
      </form>

      {/* Display Summary */}
      <div className="mt-8 p-4 border-t border-gray-300">
        <h2 className="text-xl font-semibold text-left text-blue-500 mb-2">SUMMARY</h2>
        <p className="text-justify text-gray-700 leading-relaxed border-t-2 pt-2">
          {summary.summary ||
            "A results-oriented and skilled Computer Science and Engineering student with a strong command of modern web development technologies, including React.js, Node.js, and MongoDB. Eager to apply practical project experience, robust problem-solving abilities, and a collaborative mindset to contribute to dynamic software development and quality assurance roles."}
        </p>
      </div>
    </div>
  );
};

export default Summary;