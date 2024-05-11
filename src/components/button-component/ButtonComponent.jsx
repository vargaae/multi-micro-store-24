import {
  BaseButton,
  ShopButton,
  GoogleSignInButton,
  NavigationButton,
  DropDownSignOutButton,
  InvertedButton,
} from "./ButtonComponent.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  shop: "shop",
  google: "google-sign-in",
  navigation: "navigation",
  signout: "drop-down-sign-out",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.shop]: ShopButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.navigation]: NavigationButton,
    [BUTTON_TYPE_CLASSES.signout]: DropDownSignOutButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default ButtonComponent;
