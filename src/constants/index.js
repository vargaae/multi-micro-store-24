import images from "./images";
import videos from "./videos";
import { shops } from "./shops";
import { brands } from "./brands";
import { store } from "./store";
import { shop } from "./shop";

export { images, videos, shops, brands, shop, store };

export const list = [
  { name: "Design Store", id: "113124br", link: "/store" },
  { name: "Design Shop", id: "213124ea", link: "/shop" },
  { name: "About us", id: "313124ea", link: "/about" },
  { name: "Contact", id: "413124hg", link: "/contact" },
];

export const navigation = [
  {
    id: "0",
    title: "MMSTORE-24",
    url: "/",
    onlyMobile: false,
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
    url: "/about",
    onlyMobile: false,
  },
  {
    id: "5",
    title: "Contact",
    url: "/contact",
    onlyMobile: false,
  },
  // {
  //   id: "6",
  //   title: "Orders",
  //   url: "/success",
  //   onlyMobile: false,
  // },
];
