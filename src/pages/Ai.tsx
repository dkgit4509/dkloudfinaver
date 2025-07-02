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
    alert("Prompt copied!");
  };

  return (
    <>
      <a href="/" className="home-button">🏠 Home</a>
      <h1>🤖 AI Tools & Prompts</h1>
      <p>Explore curated AI use cases and copy prompts directly</p>

      <input
        type="text"
        placeholder="🔍 Search topic"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="ai-grid">
        {filteredTools.map((tool, idx) => (
          <div key={idx} className="card">
            <h3>{tool.Topic}</h3>
            <p><strong>Category:</strong> {tool.Category || "General"}</p>
            <p><strong>Use Case:</strong> {tool.UseCase || "N/A"}</p>
            <p><strong>Prompt:</strong> {tool.Prompt || "N/A"}</p>
            <p><strong>DK Tip:</strong> {tool.DKTip || "—"}</p>
            <button onClick={() => copyPrompt(tool.Prompt || "")}>
              📋 Copy Prompt
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ai;
