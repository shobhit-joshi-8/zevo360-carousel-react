import React, { useState } from "react";
// import ListItem from "./ListItem";

function ReactCaraousel() {
  const [index, setIndex] = useState(0);
  const [angles, setAngles] = useState([
    0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
  ]);

  // const [color, setColor] = useState(0);

  const colors = [
    "rgb(204, 204, 255)",
    "rgba(255, 142, 142, 0.45)",
    "rgb(255, 224, 204)",
    "rgb(214, 245, 214)",
  ];

  const centerDivColor = [
    "rgb(128, 128, 255)",
    "rgb(255, 72, 160)",
    "rgb(255, 179, 128)",
    "rgb(128, 255, 170)",
  ];

  const borderColor = [
    " 5vh solid rgb(230, 230, 255)",
    " 5vh solid rgb(255, 245, 248)",
    " 5vh solid rgb(255, 240, 230)",
    " 5vh solid rgb(230, 255, 230)",
  ];
  //   console.log(angles[2]);
  const images = [
    "../images/third-img.png",
    "../images/fourth-img.png",
    "../images/fifth-img.png",
    "../images/sixth-img.png",
  ];

  const text = ["Pre-Pregnancy", "Pregnancy", "Infancy", "Toddlers"];

  function changeImage() {
    if (index < images.length - 1) {
      console.log("clicked");
      setIndex(index + 1);
      console.log(index);
      // setColor(index + 1);
      // console.log(color);
    } else {
      setIndex(0);
      // setColor(0);
    }

    setAngles(angles.map((angle) => angle + 30));
  }

  return (
    <>
      {/* header */}
      <section className="landing-header">
        <div className="container-fluid">
          <div className="justify-content-center px-24 row">
            <nav className="navbar  navbar-expand-md navbar-light nav-primary static_purple-card landing-page-nav">
              <div className="container">
                <a aria-current="page" className="navbar-brand active" href="/">
                  <img
                    className="card-img-top"
                    src="../images/navbar-brand.png"
                    alt="navbar-brand"
                  ></img>
                </a>
                {/* <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button> */}
                <div
                  className="collapse navbar-collapse navbar-menus "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 main-menu align-items-center">
                    <li className="nav-item">
                      <a
                        aria-current="page"
                        className="nav-link active"
                        href="/"
                      >
                        {" "}
                        Home{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        {" "}
                        About us{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        {" "}
                        Contact us{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog">
                        {" "}
                        Blog{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/faq">
                        {" "}
                        Faq{" "}
                      </a>
                    </li>
                    <li className="nav-item login-menu m-0">
                      <a className="nav-link" href="/login">
                        <button
                          className="btn btn-primary rounded-pill btn-login"
                          type="button"
                        >
                          {" "}
                          Login{" "}
                        </button>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <div className="caraousel-container">
        <div className="left-div">
          <section className="spinner-sec">
            <div className="container-fluid">
              <div className="justify-content-center spiner-cont-row1 row">
                <div className="col-xl-6">
                  <div className="landing-heading mt-lg-5 mt-4 px-xl-4 px-0 Pre Pregnancy">
                    <h1>{text[index]}</h1>
                    <div className="btn-group-landing mt-4">
                      <button
                        type="button"
                        className="btn btn-theme btn-purple btn-raunded btn-large btn-download me-2 btn btn-primary"
                      >
                        {" "}
                        Download App
                      </button>
                      <button
                        type="button"
                        className="btn btn-theme btn-raunded btn-large btn-videoPly btn "
                        style={{ backgroundColor: `${colors[index]}` }}
                      >
                        {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
                        Play intro
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="spiner-content spiner-mob-cont d-xl-none d-block">
            <h3 className="heading-text-start  spiner-ttl mrhb mt-3 mt-md-4">
              Build a Great Understanding About Your Body and Yourself{" "}
            </h3>
            <div className="mt-4 text-start land-list-icons">
              <span className="btn btn-lg bg-white text-dark border-0">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHeSURBVHgB7ZYxT8JAFMf/rzWIkURNTHTQYAwDG34AB9yMkwOLcZHZiU8gfgJ1cAY3B0ejaz+Cbg4YZWNwYGBoCN7z0ZZYS0nbszDxGw5693r/9+7e3SswZ0ZQEmMuN1axZJbCZzI/6em0jZjEEnYFqQHGcYRpEzbXyKp2I+xgIA5ZuoohOuQMi+JgDCIj5sPGjph9eI8WiG/EiZCI6EKasvPX5rWoqBcQ6ZqZB6uRG5f0XLXCzPjobgWKy85DFnuOkzrCXK7LWD7niuPF7fT2O/QF6spqBO1sidwOM6dQwcxuEcb3OtJAoYN+u0VWfeDvHk+uTL6QmqirsInMVnG824csT9YxTBvDXHe3boIwViUtpoaXL6HCSWBahjI2oIme8FCQ8AiD7+UI5XSm0BNe8OUBUQEaRF8gftgoyVmtSJS+BKRzObc9+W2C1GvcqZIJEyrS7gf6vIh5ODYlYcaDbE5OEkv2lT1BaknTccaIY0+VMGJZSkYNBpXkRrp2nVG3zpWaqLLrJtcA77/OSLQaJIt4hKEkmXAix6kHRT1ooCfs0hFR6PJ3qbs7Wt7HxJ4oTNbBAMr8QtpIaQzW5fHk6m+/OTU0NVEJROpxsHviJjkl8r/VqtvuBT8A5sycH+FAkTppgFP8AAAAAElFTkSuQmCC"
                  alt="user"
                ></img>
              </span>
              <span className="btn btn-lg  text-dark border-0 static_volumeicon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI/SURBVHgB7VZdbtNAEJ7ZNWpcFGlp85BKSJgTkBvUOQJvvNGb0DeOQTkB5Y033BM03GCRQO1DEItakQg1O8zEdmM163SbVupD+0nWemd25+fzeHcAHhoQbghj+rtKqbwp894Xzp0ewQ0Q7dgwUKefEDAP6QmooNnktWNEmAMNkehsPnuvEN+06TmgjPDJdDo5i8p8ZcZCK2rcZ6MDmYqMCEbk/w7rzHhNpjV+oAUTjrMf0YwOmP6PbbZVm2Jrq/9OaVVU1JpFpFQ06WTjlghtM17Zw3sPDNtos48tmb6VjdUSxx/wkLMYIIJkPp/zaEs9GUDcq4ITWcFPzk8mWj/zeajwgo63t3e+VtRZPyPeePK91+vvelIFrIBCNRyPfxRCv9L6WIKSovv962S4tDZkgEANqtdCnMrLeHx6pNDnTGOxHD0WtVOZC/1s5bDSDUI+EgiCTBWBbUrFOQ9DiIHsLfk0IbWCe8K9OU5iF8rJxcfIq2aF1rLFKrR1TdyZY1TpMSJmXLF79cFQy+o1RGR5eBljL5pqdjAftdZLsrb5KkRnzAcBV7M2zv0cNWVJkmT1/OLifBRrL9px+W8GZRbWwGNxtTt+IMVFl+fsXRdXG9V27ra8f9cCIuXlCwRZCPZcadrlyx3kCsw20qfQ2eja6fT8D0TAmJ0Xnc3uPi76sy+TydnnpcDCmzOj9D++yMsu4ha4bCSuKoJUO2ddWUzrfT+BNAdtTkv9Nej1nufeAx8S3kAUlFMKvtXdyCNq/Ae9bxGr4sFbgAAAAABJRU5ErkJggg=="
                  alt="user"
                ></img>
              </span>
              <span className="btn btn-lg  text-dark border-0 static_volumeicon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJRSURBVHgB7VZRTttAEJ0ZR6Ko/VgcqSX5IZwA9wTNDcoNCDfIDRJO0PYEpCdoOQHhBDUnqCvRQqvE3Y+oRZW9093ETgyxE69BiA+elGhXOztvduftjAGe8NghxMs9IbbfQEUgWEKIV2/JcQZmaObMHLBSXSl/ntj4sSLWJ2yRQ1/z1lQceVL+OoeSILAAEfXmE6YuAnYWa04HLGBFjMit2QD8MLz4MB5//8gM/jQOJM/CFdRsjJnJB+Q2MHj62g+IUOggvFksHNj4Kk1sFMz6xKkodK4HN4ICFkI0dqS8/FbG31pxaW8CaLNHiF0oA+b3Sv09khpQldioGAk/IaK32IBDZvxMBFMFKwV7jKqtHe0vuM0Tg/aq068k3nIbX1JSQxjHqlPkzATpOHjMgO2E3P8dXr4GW7juds+tNzn5HZfep23TfcJt9orssCj6TKEIwvGPXbDAltvUNzVVu1Txn928fBe943kNVjEdgiUcUqkQBdHmQZ5NLrHOVScZBlJeDMESo9HVmdlrxowL0a0lZphXoSFUx9D8aVHmVrSCAsIiiQAqtz6GVEEib3lJXEbNgNSHe4Ri1Zfh1VEh8aq2d2fymFvZGnDjqms12FGcTBj6ug2ewR2gFHu6qbybzRzzJPOJo+jZOTn/UmYxGtkrOgvXbWae0sTPri3luF5vnKZlT596oJQagDW0OInamcYy0EXocCVxkudTPWzB/SDQ+V1qGM5tq+vridzYeH6CpskDWH1V3IZpLJp0P6+xrGmLQtRqLyqRR9HEX9eTn/Ag+A+yP+HYpE43agAAAABJRU5ErkJggg=="
                  alt="user"
                ></img>
              </span>
              <span className="btn btn-lg  text-dark border-0 static_volumeicon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgB7ZbRbdswEIbvTgYiCXYhV3kI3Bdmg771Mdqg3qAewRsUnSDNBt2g6QZ67VOcCaICRYu+uCzQJEYgkb1z7SRWU4l07AAB8gG2yONRP0XekQR44oEI6oaECcPkVRj2YDb7/Qu2BK6K7ikK6OzaYO17Yy7faQY2DK1Ww1UBxDFR9Ba2ANYN8tWdTkdVxhwiwkuxmeqiv+mvxv817O7uHRhL+bzCU86uawkbYz9o/f2Ls3CSqISCq5+wAYytxnr648hJWHieDiTQFNwfzcu1f3u5Oi0dcv6NwEIxnX7bB0+SZPCaAjiWIkCX40XnyzZq7GlpMn8iKMlv8ISI1E2tOltpa+5YTpblIIgPwBPEavi3AJN6gDUKl2V4uixbaxV4IMFpAbN5xdi83t4orHUhwVDMhREy8OLqeoaMCT55CS/I5Q959D7rTATDRZFj+Wteb2+LahHMLdgRFxOk6KSfRkVbH86CBBa7HnN893sd6KeDj+w4BH8KU9nMa+eqk6Yv3oDktAMGrEYLE2MujrZxsj1OAhcnOSrj+NlhGHfH4U5Xbian9/FzFo7i3gkiZhzhCgmHO1GsZ5fnn9f1E1rzWM5lfpm6bUOkbF0/Z+GyhDtS4d9Lgavfktap5nXSUdSTt2QLk+TmqH4DdfW7GZQjEjg8Tt4yz4um3HT1e+LB+ANER85djVHU2AAAAABJRU5ErkJggg=="
                  alt="user"
                ></img>
              </span>
            </div>
            <p className="para-text-start mt-md-4 mt-3">
              We are always here to back you at evry stage, starting from pre
              pregnancy We are always here to back you at evry stage{" "}
            </p>
          </div>
        </div>
        <div
          className="spin-wheel"
          style={{
            backgroundColor: `${colors[index]}`,
            border: `${borderColor[index]}`,
          }}
        >
          <div className="box">
            <div
              className="crl-spn center-div"
              style={{ backgroundColor: `${centerDivColor[index]}` }}
            >
              <span className="btn">
                <img src="../images/first-img.png" alt="alter" />
              </span>
              <div className="ttle">{text[index]}</div>
            </div>
            {console.log(angles[2])}
            <ul onClick={changeImage} id="divs-list">
              <li
                id="first-list"
                className="list-items"
                style={{ transform: `rotate(${angles[0]}deg)` }}
                //   style={{ transform: `rotate(${angles[0]}deg)` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* style={{ transform: `rotate(${angles[4]}deg)` }} */}
              {/* second list */}
              <li
                id="second-list"
                className="list-items"
                style={{ transform: `rotate(${angles[1]}deg)` }}
                //   style={{ transform: `rotate(${angles[1]}deg)` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* third list */}
              <li
                id="third-list"
                className="list-items"
                style={{ transform: `rotate(${angles[2]}deg)` }}
                //   style={{ transform: `rotate(${angles[2]}deg})` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* fourth list */}
              <li
                id="fourth-list"
                className="list-items"
                style={{ transform: `rotate(${angles[3]}deg)` }}
                //   style={{ transform: `rotate(${angles[3]}deg})` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* fifth list */}
              <li
                id="fifth-list"
                className="list-items"
                style={{ transform: `rotate(${angles[4]}deg)` }}
                //   style={{ transform: `rotate(${120}deg)}` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* sixth list */}
              <li
                id="sixth-list"
                className="list-items"
                style={{ transform: `rotate(${angles[5]}deg)` }}
                //   style={{ transform: `rotate(${150}deg)}` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* seventh list */}
              <li
                id="seventh-list"
                className="list-items"
                style={{ transform: `rotate(${angles[6]}deg)` }}
                //   style={{ transform: `rotate(${180}deg)}` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* eight list */}
              <li
                id="eighth-list"
                className="list-items"
                style={{ transform: `rotate(${angles[7]}deg)` }}
                //   style={{ transform: `rotate(${210}deg)}` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* nineth list */}
              <li
                id="nineth-list"
                className="list-items"
                style={{ transform: `rotate(${angles[8]}deg)` }}
                //   style={{ transform: `rotate(${240}deg)}` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* tenth list */}
              <li
                id="tenth-list"
                className="list-items"
                style={{ transform: `rotate(${angles[9]}deg)` }}
                //   style={{ transform: `rotate(${270}deg)}` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* eleventh list */}
              <li
                id="eleventh-list"
                className="list-items"
                style={{ transform: `rotate(${angles[10]}deg)` }}
                //   style={{ transform: `rotate(${300}deg)}` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
              {/* eleventh list */}
              <li
                id="twelveth-list"
                className="list-items"
                style={{ transform: `rotate(${angles[11]}deg)` }}
                //   style={{ transform: `rotate(${330}deg)}` }}
              >
                <a href="#">
                  <img src="../images/second-img.png" alt="alt" />
                </a>
              </li>
            </ul>
          </div>

          <div className="block-fig">
            <div className="spinner-fig">
              <img src={`${images[index]}`} alt="spinner-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactCaraousel;
