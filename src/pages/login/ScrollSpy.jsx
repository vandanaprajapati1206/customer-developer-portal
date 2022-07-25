import React from "react";

const ScrollSpy = () => {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="50" className="xx">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              GeeksforGeeks
            </a>
          </div>
          <div>
            <div className="" id="myNavbar">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#section1">Section 1</a>
                </li>
                <li>
                  <a href="#section2">Section 2</a>
                </li>
                <li>
                  <a href="#section3">Section 3</a>
                </li>
                <li>
                  <a href="#section4">Section 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div id="section1" className="container-fluid">
        <h1>Section 1</h1>
        <h3>GeeksforGeeks</h3>
        <h5>A computer science portal for geeks.</h5>
        <h6>
          {" "}
          This portal has been created to provide well written, well thought and
          well explained solutions for selected questions related to
          programming, algorithms, other computer science subjects.
        </h6>

        <p>Scroll this section.</p>
      </div>
      <div id="section2" className="container-fluid">
        <h1>Section 2</h1>
        <h3>GeeksforGeeks</h3>
        <h5>A computer science portal for geeks.</h5>
        <h6>
          {" "}
          This portal also provide GATE previous year papers,short notes for the
          aspirants.
        </h6>

        <p>Scroll this section.</p>
      </div>
      <div id="section3" className="container-fluid">
        <h1>Section 3</h1>
        <h3>GeeksforGeeks</h3>
        <h5>A computer science portal for geeks.</h5>
        <h6>
          This portal also provide interview questions asked by private and
          public sectors.
        </h6>

        <p>Scroll this section.</p>
      </div>
      <div id="section4" className="container-fluid">
        <h1>Section 4</h1>
        <h3>GeeksforGeeks</h3>
        <h5>A computer science portal for geeks.</h5>
        <h6>It also provide Internship or contributor program for students.</h6>

        <p>Scroll this section.</p>
      </div>
    </div>
  );
};

export default ScrollSpy;
