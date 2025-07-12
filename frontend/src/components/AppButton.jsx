import PropTypes from "prop-types";

const AppButton = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  className = "",
  disabled = false,
  block = false,
  iconLeft,
  iconRight,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${block ? "w-100" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && <span className="me-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ms-2">{iconRight}</span>}
    </button>
  );
};

AppButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
};

export default AppButton;