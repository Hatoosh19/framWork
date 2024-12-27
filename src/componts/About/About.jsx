export default function About() {
  return (
    <>
      <div id="About" className="about d-flex justify-content-center align-items-center min-vh-100 bg-section">
        <div className="content pt-3">
          <h1 className="text-uppercase text-white fw-bolder text-center">
            about component
          </h1>
          <div className="d-flex justify-content-center align-items-center mb-3 gap-2">
            <div className="line"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="line"></div>
          </div>
          <div className="container text-white ">
            <div className="row">
              <div className="col-md-6 ps-md-5">
                <div className="contnet">
                  <p className="lead">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
              <div className="col-md-6 pe-5">
                <div className="contnet">
                  <p className="lead">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
