import React from 'react'

export default function Navbar() {
  return (<>
   <nav className="navbar position-fixed w-100 navbar-expand-lg bg-nav py-4 z-3 " id="navbar-example">
  <div className="container">
    <a className="navbar-brand text-uppercase fs-32 text-white fw-bolder" href="#">Start Framework</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase gap-3 fw-bold">
        <li className="nav-item">
          <a className="nav-link text-white active" aria-current="page" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#Portfolio">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#Contact">contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
   </>
   )
}
