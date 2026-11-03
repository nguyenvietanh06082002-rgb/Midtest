import React from 'react'

function Explore({ anime }) {
  return (
    <div className="explore">

      <h2>Explore</h2>

      <p>What are you gonna watch today ?</p>

      <div
        className="banner"
        style={{
          backgroundImage: `url(${anime.banner})`
        }}
      >

        <div className="banner-content">

          <h1>{anime.title}</h1>

          <p>{anime.description}</p>

        </div>

      </div>

    </div>
  )
}

export default Explore