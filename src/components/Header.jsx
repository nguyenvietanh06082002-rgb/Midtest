import React from 'react'

function Header() {
  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        Anonime
      </div>

      {/* Menu */}
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">List anime</a>
      </nav>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search anime or movie"
        />
      </div>

    </header>
  )
}

export default Header