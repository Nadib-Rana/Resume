import { useState, useEffect } from "react";
import Summary from "../Summary";

const UserSummary = () => {
  const [summary, setSummary] = useState({ summary: "" });
  const [savedDate, setSavedDate] = useState("");

  // Load saved summary and date on initial render
  useEffect(() => {
    const savedSummary = localStorage.getItem("userSummary");
    const savedDateStamp = localStorage.getItem("summaryDate");

    if (savedSummary) {
      setSummary({ summary: savedSummary });
    }
    if (savedDateStamp) {
      setSavedDate(savedDateStamp);
    }
  }, []);

  const handleChange = (e) => {
    setSummary({ summary: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userSummary", summary.summary);
    const timestamp = new Date().toISOString();
    localStorage.setItem("summaryDate", timestamp);
    setSavedDate(timestamp);
    alert("Summary saved successfully!");
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
          title="Please enter at least 10 characters for the summary."
          value={summary.summary}
          onChange={handleChange}
        ></textarea>
        <p className="text-sm text-gray-500 mt-1">
          {summary.summary.length} / 500 characters
        </p>

        <button
          type="button"
          onClick={handleSave}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Save Summary
        </button>
      </form>

      {/* Display Summary Preview */}
      <div className="mt-8 p-4 border-t border-gray-300">
        <Summary summaryText={summary.summary} savedDate={savedDate} />
      </div>
    </div>
  );
};

export default UserSummary;