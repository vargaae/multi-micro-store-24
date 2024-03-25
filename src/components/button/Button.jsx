import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ label, children, buttonType, ...otherProps }) => {
  return (
    <div>
      <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps }>
        {label}
      </button>
    </div>
  );
};
