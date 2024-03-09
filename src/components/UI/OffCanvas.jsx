import { useContext } from "react";
import { CartShowContext } from "../../Contexts/CartShowContext";
import PropTypes from "prop-types";
import "./OffCanvas.css";

const OffCanvas = ({ children }) => {
  const CartClose = useContext(CartShowContext);

  const { setCartIsShow } = CartClose;

  return (
    <>
      <div className="backdrop" onClick={() => setCartIsShow(false)}></div>
      <div className="offcanvas">
        <div className="content">{children}</div>
      </div>
    </>
  );
};

OffCanvas.propTypes = {
  children: PropTypes.node,
};
export default OffCanvas;
