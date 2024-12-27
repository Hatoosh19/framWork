import React from "react";

export default function Contact() {
  return (
    <>
      <div id="Contact" className="contact py-5">
        <div className="content">
          <h1 className="text-center text-uppercase">conatct section</h1>
          <div className="d-flex justify-content-center align-items-center mb-3 gap-2">
            <div className="line bg-dark"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line bg-dark"></div>
          </div>
          <div className="container w-50">
            <div className="w-100 text-center">
            <div class="form-floating mb-4">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="UserName"
            />
            <label for="floatingInput">UserName</label>
          </div>
          <div class="form-floating">
            <input
              type="number"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">UserAge</label>
          </div>
          <div class="form-floating mt-4">
            <input
              type="email"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">UserEmail</label>
          </div>
          <div class="form-floating mt-4">
            <input
              type="email"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">UserPassword</label>
          </div>
          <input type="submit" className="btn btn-success mt-2 px-3 py-2 me-auto d-block" value={"send Message"} />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
{
  /* <form  novalidate="" action="" className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
            <label for="userName" className="position-relative top-0 __top">userName : </label>
            <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
            <label for="userAge" className="position-relative top-0 __top">userAge : </label>
            <input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
            <label for="userEmail" className="position-relative top-0 __top">userEmail : </label>
            <input id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
            <label for="userPassword" className="position-relative top-0 __top">userPassword : </label>
            <input id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
            <button className="btn mt-4 text-white" style="background-color: #1abc9c;"> send Message </button>
            </form>
        </div>
        </div> */
}
