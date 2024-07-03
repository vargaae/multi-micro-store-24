import images from "./images";
import videos from "./videos";
import { shops } from "./shops";
import { brands } from "./brands";
import { store } from "./store";
import { shop } from "./shop";

export { images, videos, shops, brands, shop, store };

export const list = [
  { name: "Shop", id: "113124br", link: "/shop" },
  { name: "Company", id: "213124ea", link: "/shop" },
  { name: "Counters", id: "313124ea", link: "/shop" },
  { name: "Contact", id: "413124hg", link: "/contact" },
];

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
    onlyMobile: true,
  },
  {
    id: "1",
    title: "Design Shop",
    url: "/shop",
    onlyMobile: false,
  },
  {
    id: "2",
    title: "Design Store",
    url: "/store",
    onlyMobile: false,
  },
  {
    id: "3",
    title: "Cart/Checkout",
    url: "/checkout",
    onlyMobile: true,
  },
  {
    id: "4",
    title: "About",
    url: "/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Contact",
    url: "/",
    onlyMobile: true,
  },
];
