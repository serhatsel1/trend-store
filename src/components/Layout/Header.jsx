import PropTypes from "prop-types";

import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <div className="header">
      <h1>Trend Mağaza</h1>
      <HeaderCartButton />
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
