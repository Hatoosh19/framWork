import React, { useState } from "react";

export default function Portfolio() {
  const [selectImage, setSelectedImage] = useState(false); // Controls the modal visibility
  const [image, setImage] = useState(""); // Stores the URL of the selected image

  const handleImageClick = (imageUrl) => {
    setImage(imageUrl); // Set the clicked image URL
    setSelectedImage(true); // Show the modal
  };

  const handleCloseModal = () => {
    setSelectedImage(false); // Hide the modal
    setImage(""); // Clear the selected image
  };

  return (
    <>
      <div id="Portfolio" className="portfolio position-relative">
        <div className="content text-dark text-center py-4">
          <h1 className="text-center">Portfolio Component</h1>
          <div className="d-flex justify-content-center align-items-center mb-3 gap-2">
            <div className="line bg-dark"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line bg-dark"></div>
          </div>
          <div className="container">
            <div className="row">
              {[
                "public/assets/images/poert1.png",
                "public/assets/images/port2.png",
                "public/assets/images/port3.png",
                "public/assets/images/port2.png",
                "public/assets/images/poert1.png",
                "public/assets/images/port2.png",
              ].map((img, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <figure onClick={() => handleImageClick(img)}>
                      <img
                        src={img}
                        className="img-fluid"
                        alt={`Portfolio ${index + 1}`}
                      />
                      <figcaption className="position-absolute d-flex align-items-center justify-content-center">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectImage && (
          <div
            className="position-fixed z-3  start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center"
            onClick={handleCloseModal}
          >
            <img alt="Selected" src={image} className="img-fluid w-50" />
          </div>
        )}
      </div>
    </>
  );
}
