import { useEffect, useState } from "react"

interface AiTool {
  ToolName: string
  Description: string
  Link: string
  Category?: string
}

const Ai = () => {
  const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbxpIEMPY1Ji3tft5mYLNaObg9csvvzCdoWuAcOpz-KQlMWWmytkzShEgZBJNQ3r3yl7/exec"

  const [tools, setTools] = useState<AiTool[]>([])

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item: AiTool) => item.ToolName)
        setTools(filtered)
      })
      .catch((err) => {
        console.error("Error fetching AI Tools:", err)
      })
  }, [])

  return (
    <>
      <a href="/" className="home-button">🏠 Home</a>
      <h1>🤖 AI Tools</h1>
      <p>Explore the best AI tools handpicked by dKloud</p>

      <div className="grid">
        {tools.map((tool, idx) => (
          <div key={idx} className="card">
            <h3>{tool.ToolName}</h3>
            <p>{tool.Description}</p>
            <a href={tool.Link} target="_blank" rel="noopener noreferrer">
              🔗 Visit
            </a>
            {tool.Category && <p>📂 {tool.Category}</p>}
          </div>
        ))}
      </div>
    </>
  )
}

export default Ai
