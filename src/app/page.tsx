"use client"
import React, { useState } from "react";

export default function Home() {

  const[text, setText] = useState("")

  const handleSumbit = async (e: React.FormEvent) => {};

  return (
    <div className="flex  ">
      <form className="flex items-center" onSubmit={handleSumbit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="The text or details you want to translate"
          required
        />
        <button className="bg-emerald-500 hover:bg-emerald-800">Translate</button>
      </form>
    </div>
  );
}
