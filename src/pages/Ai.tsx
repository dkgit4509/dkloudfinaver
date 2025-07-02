import { useEffect, useState } from "react";

interface AiTool {
  Topic: string;
  Category?: string;
  Prompt?: string;
  Notes?: string;
  UseCase?: string;
  DKTip?: string;
}

const Ai = () => {
  const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbxpIEMPY1Ji3tft5mYLNaObg9csvvzCdoWuAcOpz-KQlMWWmytkzShEgZBJNQ3r3yl7/exec";

  const [tools, setTools] = useState<AiTool[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => {
        const valid = data.filter((item: AiTool) => item.Topic);
        setTools(valid);
      })
      .catch((err) => console.error("Failed to fetch AI tools", err));
  }, []);

  const filteredTools = tools.filter((tool) =>
    tool.Topic.toLowerCase().includes(search.toLowerCase())
  );

  const copyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copied!");
  };

  return (
    <div className="p-4">
      <a href="/" className="home-button">
        🏠 Home
      </a>
      <h1 className="text-2xl font-bold my-4">🤖 AI Tools & Prompts</h1>
      <p className="mb-4">Explore AI use cases and copy prompts directly from the list.</p>

      <input
        type="text"
        placeholder="🔍 Search by topic"
        className="border border-gray-300 p-2 w-full max-w-md rounded-md mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-900 p-4 rounded-lg s
