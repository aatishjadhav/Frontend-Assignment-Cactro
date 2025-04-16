import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../slices/popupSlice";

function SlackLanding() {
  const dispatch = useDispatch();
  const showPopup = useSelector((state) => state.popup.showPopup); 
  return (
    <div className="min-vh-100 bg-light text-dark">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand fw-bold" href="#">
            Slack
          </a>
          <div>
            <a href="#" className="me-3 text-dark text-decoration-none">
              Product
            </a>
            <a href="#" className="me-3 text-dark text-decoration-none">
              Enterprise
            </a>
            <a href="#" className="me-3 text-dark text-decoration-none">
              Resources
            </a>
            <a href="#" className="me-3 text-dark text-decoration-none">
              Pricing
            </a>
          </div>
          <div>
            <button className="btn btn-outline-dark me-2">Sign In</button>
            <button className="btn btn-outline-secondary me-2">
              Talk to Sales
            </button>
            <button className="btn btn-primary">Try for Free</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5 container">
        <h1 className="display-4 fw-bold">Slack is where the future works</h1>
        <p className="lead text-muted">
          Transform the way you work with one place for everything you need to
          get stuff done.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-primary btn-lg">Try for Free</button>
          <button className="btn btn-outline-secondary btn-lg">
            Sign Up with Google
          </button>
        </div>
      </header>

      {/* Brand Logos */}
      <section className="container text-center my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto">
            <img src="/fox.svg" alt="Fox" className="img-fluid" />
          </div>
          <div className="col-auto">
            <img
              src="/lonelyplanet.svg"
              alt="Lonely Planet"
              className="img-fluid"
            />
          </div>
          <div className="col-auto">
            <img src="/intuit.svg" alt="Intuit" className="img-fluid" />
          </div>
          <div className="col-auto">
            <img src="/carvana.svg" alt="Carvana" className="img-fluid" />
          </div>
          <div className="col-auto">
            <img src="/kiva.svg" alt="Kiva" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="container text-center py-5">
        <h2 className="fw-bold">
          Now is your moment to build a better tomorrow
        </h2>
        <p className="lead text-muted">
          We've seen what the future can be. Now it's time to decide what it
          will be.
        </p>
        <button className="btn btn-dark">Watch Video</button>
      </section>

      {/* Pop-up */}
      {showPopup ? (
        <div className="position-fixed bottom-0 end-0 m-4 bg-white shadow p-3 rounded">
          <p className="mb-2">Hey there! Want to know something cool?</p>
          <button
            onClick={() => dispatch(togglePopup())}
            className="btn btn-link"
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default SlackLanding;
