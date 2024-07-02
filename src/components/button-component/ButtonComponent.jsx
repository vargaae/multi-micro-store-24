import {
  BaseButton,
  StartButton,
  ShopButton,
  ShopProductPageButton,
  GoogleSignInButton,
  NavigationButton,
  DropDownSignOutButton,
  InvertedButton,
  ContactButton,
} from "./ButtonComponent.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  start: "start",
  shop: "shop",
  productpage: "productpage",
  google: "google-sign-in",
  navigation: "navigation",
  signout: "drop-down-sign-out",
  inverted: "inverted",
  contact: "contact",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.start]: StartButton,
    [BUTTON_TYPE_CLASSES.shop]: ShopButton,
    [BUTTON_TYPE_CLASSES.productpage]: ShopProductPageButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.navigation]: NavigationButton,
    [BUTTON_TYPE_CLASSES.signout]: DropDownSignOutButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.contact]: ContactButton,
  }[buttonType]);

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default ButtonComponent;
