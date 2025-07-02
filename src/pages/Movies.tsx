import { useEffect, useState } from "react"

interface Movie {
  Name: string
  Genre?: string
  "Platform(s)"?: string
  Language?: string
  Awards?: string
  "DKcloud Rating"?: string
  "Origin Language"?: string
  Achievements?: string
  "Why to Watch"?: string
  Director?: string
  Year?: string
}

const Movies = () => {
  const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbzO53FfgLV-2Kq5pP0fYF7yjFw1CQlZkZoc5TEIn3rDcPSxv8MB8koOasYlf6BuXXCQ/exec"
    
  const [allMovies, setAllMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [filters, setFilters] = useState({
    genre: "",
    platform: "",
    language: "",
    award: "",
    search: "",
  })

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item: Movie) => item.Name)
        setAllMovies(filtered)
        setFilteredMovies(filtered)
      })
  }, [])

  useEffect(() => {
    applyFilters()
  }, [filters])

  const applyFilters = () => {
    const { genre, platform, language, award, search } = filters
    const result = allMovies.filter((item) => {
      const genres = item.Genre?.split(",").map((g) => g.trim()) || []
      const platforms =
        item["Platform(s)"]?.split(",").map((p) => p.trim()) || []

      return (
        (!genre || genres.includes(genre)) &&
        (!platform || platforms.includes(platform)) &&
        (!language || item.Language === language) &&
        (!award || item.Awards === award) &&
        (!search || item.Name.toLowerCase().includes(search.toLowerCase()))
      )
    })
    setFilteredMovies(result)
  }

  const getUniqueValues = (key: keyof Movie): string[] => {
    const values = new Set<string>()
    allMovies.forEach((item) => {
      if (item[key]) {
        if (key === "Genre" || key === "Platform(s)") {
          item[key]!.split(",").forEach((v) => values.add(v.trim()))
        } else {
          values.add(item[key]!.trim())
        }
      }
    })
    return Array.from(values).sort()
  }

  const handleThemeToggle = () => {
    const isDark = document.body.classList.toggle("dark-mode")
    localStorage.setItem("theme", isDark ? "dark" : "light")
    const toggleBtn = document.getElementById("theme-toggle")
    if (toggleBtn) toggleBtn.textContent = isDark ? "☀️" : "🌙"
  }

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      document.body.classList.add("dark-mode")
      const toggleBtn = document.getElementById("theme-toggle")
      if (toggleBtn) toggleBtn.textContent = "☀️"
    }
  }, [])

  return (
    <>
      <a href="/" className="home-button">🏠 Home</a>
      <button id="theme-toggle" onClick={handleThemeToggle}>🌙</button>
      <a
        href="https://wa.me/91817596960"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

      <header>
        <h1>🎬 Must Watch Movies</h1>
        <p>Search or use filters to find movies</p>
      </header>

      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search by name"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />

        <select
          value={filters.genre}
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        >
          <option value="">🎭 Genre</option>
          {getUniqueValues("Genre").map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>

        <select
          value={filters.platform}
          onChange={(e) =>
            setFilters({ ...filters, platform: e.target.value })
          }
        >
          <option value="">📺 Platform</option>
          {getUniqueValues("Platform(s)").map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <select
          value={filters.language}
          onChange={(e) =>
            setFilters({ ...filters, language: e.target.value })
          }
        >
          <option value="">🗣️ Language</option>
          {getUniqueValues("Language").map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>

        <select
          value={filters.award}
          onChange={(e) => setFilters({ ...filters, award: e.target.value })}
        >
          <option value="">🏆 Awards</option>
          {getUniqueValues("Awards").map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </div>

      <div id="showGrid">
        {filteredMovies.map((item, idx) => (
          <div key={idx} className="card">
            <h3>{item.Name}</h3>
            <p>🎭 Genre: {item.Genre || "N/A"}</p>
            <p>📺 Platform: {item["Platform(s)"] || "N/A"}</p>
            <p>🗣️ Language: {item.Language || "N/A"}</p>
            <p>🏆 Awards: {item.Awards || "N/A"}</p>
            <p>
              ⭐ <strong className="rating">Rating: {item["DKcloud Rating"] || "N/A"}</strong>
            </p>
            <hr />
            <p>🌍 Origin Language: {item["Origin Language"] || "N/A"}</p>
            <p>🏅 Achievements: {item.Achievements || "N/A"}</p>
            <p>💡 Why to Watch: {item["Why to Watch"] || "N/A"}</p>
            <p>🎬 Director: {item.Director || "N/A"}</p>
            <p>📅 Year: {item.Year || "N/A"}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Movies
