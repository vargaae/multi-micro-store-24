import { createContext, useState } from "react";

export const UserMenuContext = createContext({
  UserMenuOpen: false,
  setUserMenuOpen: () => {},
});

export const UserMenuProvider = ({ children }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const value = {userMenuOpen, setUserMenuOpen}

  return <UserMenuContext.Provider value={value}>{children}</UserMenuContext.Provider>;
};
