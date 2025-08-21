"use client";
import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/myendpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error("Request Failed");

      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error("Error in sending data", error);
    } finally {
      setLoading(false);
    }
  };
return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center py-10">
    <div className="w-full max-w-2xl bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8 mx-2">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 text-center mb-8">
        Plain-Language Privacy & Terms Summarizer
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste privacy/terms text here..."
          className="w-full h-44 p-4 border-2 border-blue-200 bg-blue-50 focus:bg-white rounded-xl shadow focus:outline-none focus:border-indigo-400 text-lg transition"
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 focus:outline-none"
          >
            {loading ? "Translating..." : "Translate"}
          </button>
        </div>
      </form>

      {summary && (
        <div className="mt-10 space-y-6">
          <div className="p-6 bg-blue-50 border-2 border-blue-100 rounded-2xl shadow">
            <h2 className="font-extrabold text-xl mb-2 text-indigo-700">Summary</h2>
            <p className="text-gray-700">{summary.summary}</p>
          </div>
          <div className="p-6 bg-indigo-50 border-2 border-indigo-100 rounded-2xl shadow">
            <h2 className="font-extrabold text-xl mb-2 text-blue-600">Risks</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              {summary.risks?.map((risk: string, i: number) => (
                <li key={i}>{risk}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-2 border-blue-100 rounded-2xl shadow">
            <h2 className="font-extrabold text-xl mb-2 text-indigo-700">Tips</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              {summary.tips?.map((tip: string, i: number) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  </div>
);

}
