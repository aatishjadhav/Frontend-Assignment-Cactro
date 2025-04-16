import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="left">
        <li className="navBig">Slack</li>
        <li>Products</li>
        <li>Enterprize</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>

      <ul className="right">
        <li>search</li>
        <li>Sign in</li>
        <li className="sales">Talk to Sales</li>
        <li className="free">Try For Free</li>
      </ul>
    </div>
  );
};

export default Navbar;
