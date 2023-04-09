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
