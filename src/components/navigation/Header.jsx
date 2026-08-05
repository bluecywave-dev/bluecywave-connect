import "./Header.css";
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'

function Header() {
  return (
    <header className="header">

  <div className="logo">
    <strong>Bluecywave</strong>
    <span> Connect</span>
  </div>

  <div className="search-box">
    <FaSearch />

    <input
      type="search"
      placeholder="Search Bluecywave..."
      aria-label="Search"
    />
  </div>

  <div className="header-icons">

    <button>
      <FaBell />
    </button>

    <button>
      <FaUserCircle />
    </button>

  </div>

</header>
  )
}

export default Header