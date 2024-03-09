import ReactDOM from "react-dom";
import { useContext } from "react";
import { CartShowContext } from "../../Contexts/CartShowContext";
import PropTypes from "prop-types";
import "./OffCanvas.css";

const Backdrop = () => {
  const CartClose = useContext(CartShowContext);
  const { setCartIsShow } = CartClose;
  return <div className="backdrop" onClick={() => setCartIsShow(false)}></div>;
};

const OffCanvasOverlay = ({ children }) => {
  return (
    <div className="offcanvas">
      <div className="content">{children}</div>
    </div>
  );
};

const OffCanvas = ({ children, setCartIsShow }) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setCartIsShow={setCartIsShow} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <OffCanvasOverlay>{children}</OffCanvasOverlay>,
        portalElement
      )}
    </>
  );
};

OffCanvas.propTypes = {
  children: PropTypes.node,
  setCartIsShow: PropTypes.func,
};
OffCanvasOverlay.propTypes = {
  children: PropTypes.node,
};
export default OffCanvas;
