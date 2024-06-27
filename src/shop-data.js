const PRODUCTS = [
  {
    title: "ZYW3VTp",
    id: "ZYW3VTp",
    SKU: "ZYW3VTp",
    name: "Brown Brim",
    desc: "Brown Brim...",
    img: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    img2: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
    oldPrice: 35,
    type: "featured-in-shop",
    brand: "Cowboy",
    colors: "brown",
    isAvailable: "In Stock",
    isAvailableNumber: 3,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Hats"],
  },
  {
    title: "ypkgK0X",
    id: "ypkgK0X",
    SKU: "ypkgK0X",
    name: "Blue Beanie",
    desc: "Blue Beanie...",
    img: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    img2: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18,
    oldPrice: 20,
    type: "featured-in-shop",
    brand: "Cowboy",
    colors: "brown",
    isAvailable: "In Stock",
    isAvailableNumber: 3,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Hats"],
  },
  {
    title: "QdJwgmp",
    id: "QdJwgmp",
    SKU: "QdJwgmp",
    name: "Brown Cowboy",
    desc: "Cowboys' favourite wear...",
    img: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    img2: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    price: 35,
    oldPrice: 35,
    type: "featured-in-shop",
    brand: "Cowboy",
    colors: "brown",
    isAvailable: "In Stock",
    isAvailableNumber: 3,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Hats"],
  },
  {
    title: "XzcwL5s",
    id: "XzcwL5s",
    SKU: "XzcwL5s",
    name: "Black Jean Shearling",
    desc: "Black Jean Shearling...",
    img: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    img2: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8777dfa7/1_front_750/00470387-03.jpg?sw=1000&sh=1500",
    price: 125,
    oldPrice: 155,
    type: "featured-in-shop",
    brand: "Jeans",
    colors: "black",
    isAvailable: "In Stock",
    isAvailableNumber: 3,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Jackets"],
  },
];

// SHAPE:
// SKU;
// "XzcwL5s"(string);

// brand;
// "Jeans"(string);

// categories(array);
// 0;
// "Design SHOP Clothes"(string);

// colors;
// "black"(string);

// desc;
// "Black Jean Shearling"(string);

// img;
// "https://i.ibb.co/XzcwL5s/black-shearling.png"(string);

// img2;
// "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8777dfa7/1_front_750/00470387-03.jpg?sw=1000&sh=1500"(
//   string
// );

// isAvailable;
// "In Stock"(string);

// isAvailableNumber;
// 3(number);

// isNew;
// false(boolean);

// isSale;
// true(boolean);

// name;
// "Black Jean Shearling"(string);

// oldPrice;
// 155(number);

// price;
// "125"(string);

// sub_category(array);

// 0;
// "Jackets"(string);

// type;
// ("featured-in-shop");

// const PRODUCTS = [
//   {
//     title: 'Hats',
//     items: [
//       {
//         id: 1,
//         name: 'Brown Brim',
//         imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//         price: 25,
//       },
//       {
//         id: 2,
//         name: 'Blue Beanie',
//         imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
//         price: 18,
//       },
//       {
//         id: 3,
//         name: 'Brown Cowboy',
//         imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
//         price: 35,
//       },
//       {
//         id: 4,
//         name: 'Grey Brim',
//         imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
//         price: 25,
//       },
//       {
//         id: 5,
//         name: 'Green Beanie',
//         imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
//         price: 18,
//       },
//       {
//         id: 6,
//         name: 'Palm Tree Cap',
//         imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
//         price: 14,
//       },
//       {
//         id: 7,
//         name: 'Red Beanie',
//         imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
//         price: 18,
//       },
//       {
//         id: 8,
//         name: 'Wolf Cap',
//         imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
//         price: 14,
//       },
//       {
//         id: 9,
//         name: 'Blue Snapback',
//         imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
//         price: 16,
//       },
//     ],
//   },
//   {
//     title: 'Sneakers',
//     items: [
//       {
//         id: 10,
//         name: 'Adidas NMD',
//         imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
//         price: 220,
//       },
//       {
//         id: 11,
//         name: 'Adidas Yeezy',
//         imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
//         price: 280,
//       },
//       {
//         id: 12,
//         name: 'Black Converse',
//         imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
//         price: 110,
//       },
//       {
//         id: 13,
//         name: 'Nike White AirForce',
//         imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
//         price: 160,
//       },
//       {
//         id: 14,
//         name: 'Nike Red High Tops',
//         imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
//         price: 160,
//       },
//       {
//         id: 15,
//         name: 'Nike Brown High Tops',
//         imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
//         price: 160,
//       },
//       {
//         id: 16,
//         name: 'Air Jordan Limited',
//         imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
//         price: 190,
//       },
//       {
//         id: 17,
//         name: 'Timberlands',
//         imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
//         price: 200,
//       },
//     ],
//   },
//   {
//     title: 'Jackets',
//     items: [
//       {
//         id: 18,
//         name: 'Black Jean Shearling',
//         imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
//         price: 125,
//       },
//       {
//         id: 19,
//         name: 'Blue Jean Jacket',
//         imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
//         price: 90,
//       },
//       {
//         id: 20,
//         name: 'Grey Jean Jacket',
//         imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
//         price: 90,
//       },
//       {
//         id: 21,
//         name: 'Brown Shearling',
//         imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
//         price: 165,
//       },
//       {
//         id: 22,
//         name: 'Tan Trench',
//         imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
//         price: 185,
//       },
//     ],
//   },
//   {
//     title: 'Womens',
//     items: [
//       {
//         id: 23,
//         name: 'Blue Tanktop',
//         imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
//         price: 25,
//       },
//       {
//         id: 24,
//         name: 'Floral Blouse',
//         imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
//         price: 20,
//       },
//       {
//         id: 25,
//         name: 'Floral Dress',
//         imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
//         price: 80,
//       },
//       {
//         id: 26,
//         name: 'Red Dots Dress',
//         imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
//         price: 80,
//       },
//       {
//         id: 27,
//         name: 'Striped Sweater',
//         imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
//         price: 45,
//       },
//       {
//         id: 28,
//         name: 'Yellow Track Suit',
//         imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
//         price: 135,
//       },
//       {
//         id: 29,
//         name: 'White Blouse',
//         imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
//         price: 20,
//       },
//     ],
//   },
//   {
//     title: 'Mens',
//     items: [
//       {
//         id: 30,
//         name: 'Camo Down Vest',
//         imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
//         price: 325,
//       },
//       {
//         id: 31,
//         name: 'Floral T-shirt',
//         imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
//         price: 20,
//       },
//       {
//         id: 32,
//         name: 'Black & White Longsleeve',
//         imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
//         price: 25,
//       },
//       {
//         id: 33,
//         name: 'Pink T-shirt',
//         imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
//         price: 25,
//       },
//       {
//         id: 34,
//         name: 'Jean Long Sleeve',
//         imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
//         price: 40,
//       },
//       {
//         id: 35,
//         name: 'Burgundy T-shirt',
//         imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
//         price: 25,
//       },
//     ],
//   },
// ];

export default PRODUCTS;
