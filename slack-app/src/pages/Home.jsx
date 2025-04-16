import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import Navbar from "./Navbar";
import { togglePopup } from "../slices/popupSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { showPopup } = useSelector((state) => state.popup);
  return (
    <div className="main">
      <Navbar />
      {showPopup ? (
        <section>
          <div className="firstPop">
            <p>
              Slack is your digital HQ. Meet the new features keeping team
              connected in work from anywhere world. Lets go{" "}
            </p>
            <button onClick={() => dispatch(togglePopup())}>Cancel</button>
          </div>
        </section>
      ) : null}

      <section>
        <div className="hero">
          <div className="le">
            <p className="textBig">
              Slack is where the <br /> future works
            </p>
            <p className="desc">
              Transform the way you work with one place for <br /> everyone and
              everything you need to get stuff done
            </p>
            <button className="free-btn">Try For Free</button>
            <button className="sign">Sign Up With Google</button>
          </div>
          <div className="ri">
            <img src="https://placehold.co/400x300" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="logos">
          <span>Fox</span>
          <span>Intuit</span>
          <span>Fox</span>
          <span>Intuit</span>
          <span>Fox</span>
          <span>Intuit</span>
          <span>Intuit</span>
          <span>Intuit</span>
        </div>
      </section>

      <section>
        <div className="middle">
          <div className="img">
            <img src="https://placehold.co/400x300" alt="" />
          </div>
          <div className="descr">
            <p className="text">
              Now is your monent to build a <br /> better tomorrow
            </p>
            <p className="description">
              We've seen what the future can be. Now It's time to decide <br />{" "}
              what it will be.
            </p>
            <button className="watch">Watch Video</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
