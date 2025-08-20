"use client";
import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/myendpont", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error("Request Failed");

      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.log("Error in sending data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSumbit} className="space y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste privacy/terms here..."
          className="w-full h-50 p-4 border rounded-md"
          required
        />
        <button type="submit" className= "px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-800">
          Translate
        </button>
      </form>
    </div>
  );
}
