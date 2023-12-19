import React from 'react'

function Footer() {
  return (
    <footer className="bg-light text-center text-white mt-1">
  <div className="container p-2 pb-0">
    <section className="mb-1 ">
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
      >
        <i className="fa fa-facebook-f" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
      >
        <i className="fa fa-twitter" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#dd4b39" }}
        href="#!"
        role="button"
      >
        <i className="fa fa-google" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      >
        <i className="fa fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#0082ca" }}
        href="#!"
        role="button"
      >
        <i className="fa fa-linkedin" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#333333" }}
        href="#!"
        role="button"
      >
        <i className="fa fa-github" />
      </a>
    </section>
  </div>
  <div
    className="text-center p-2"
    style={{ backgroundColor: "rgb(30, 36, 28)", fontWeight: "bold" }}
  >
    © 2023 Copyright: 
    <a className="text-white" href="#">
      JeanStation.com
    </a>
  </div>
</footer>

  )
}

export default Footer