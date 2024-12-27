import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="Footer" className=" text-center bg-nav text-white p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-nav border-0 m-0 p-0 text-white">
                <h3>LOCATION</h3>
                <p className="lead">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-nav border-0 m-0 p-0 text-white">
                <h3 className="text-uppercase">AROUND THE WEB</h3>
                <ul className="d-flex justify-content-center align-items-center gap-3 me-4 ">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook mx-1 icon fs-4"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter mx-1 icon fs-4"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-fa-brands fa-linkedin-in mx-1 icon fs-4"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-globe mx-1 icon fs-4"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-nav border-0 m-0 p-0 text-white">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
