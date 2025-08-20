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
    <div className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste privacy/terms text here..."
          className="w-full h-48 p-3 border rounded-md"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-pink-500 hover:bg-emerald-700 text-white"
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </form>

      {summary && (
        <div className="mt-6 space-y-4">
          <div className="p-4 border rounded-md">
            <h2 className="font-bold text-lg mb-2">Summary</h2>
            <p>{summary.summary}</p>
          </div>
          <div className="p-4 border rounded-md">
            <h2 className="font-bold text-lg mb-2">Risks</h2>
            <ul className="list-disc ml-5 space-y-1">
              {summary.risks?.map((risk: string, i: number) => (
                <li key={i}>{risk}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h2 className="font-bold text-lg mb-2">Tips</h2>
            <ul className="list-disc ml-5 space-y-1">
              {summary.tips?.map((tip: string, i: number) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
