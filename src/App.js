import "./App.css";
import { AddColor } from "./AddColor";

const INITIAL_PRODUCT_LIST = [
  {
    name: "iPhone 13 (128GB)",
    poster:
      "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹51,499",
    rating: 4.5,
    summary:
      "15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
  },
  {
    name: "LG 80 cm (32 inches) HD Smart LED TV",
    poster: "https://m.media-amazon.com/images/I/71kuqRw8L5L._SX522_.jpg",
    price: "₹13,490",
    rating: 4.3,
    summary:
      "Web OS Smart TV | Wi-Fi | Home Dashboard | Screen Mirroring | Mini TV Browser | Multi-Tasking ",
  },
  {
    name: "LG 185 L Single Door Refrigerator",
    poster: "https://m.media-amazon.com/images/I/714C5PDdPQL._SX679_.jpg",
    price: "₹16,990",
    rating: 4.3,
    summary:
      "Inverter Compressor, Base Stand with drawer, Stabilizer free operation, Door Lock, Adjustable Shelves",
  },
  {
    name: "Samsung 7 kg Washing Machine",
    poster: "https://m.media-amazon.com/images/I/61gbJJMLLEL._SY741_.jpg",
    price: " ₹15,490",
    rating: 4.4,
    summary:
      "Fully-automatic top load washing machine: Affordable with great wash quality Easy to use",
  },
  {
    name: "Bajaj 20L Grill Microwave Oven",
    poster: "https://m.media-amazon.com/images/I/71ITInjy-FL._SX679_.jpg",
    price: "₹5,799",
    rating: 4.3,
    summary: "20L Capacity: Suitable for bachelors or small families",
  },
  {
    name: "AQUA D PURE Copper RO Water Purifier",
    poster: "https://m.media-amazon.com/images/I/61qefdUzEEL._SX522_.jpg",
    price: "₹5,199",
    rating: 4.3,
    summary:
      "Elegant Design with Purified Water Level Indicator, Push Fit component for Leak Proof Performance",
  },
  {
    name: "Crompton Amica 15-L Storage Water Heater",
    poster: "https://m.media-amazon.com/images/I/51KJZ5ccJXL._SX679_.jpg",
    price: "₹6,820",
    rating: 4.2,
    summary:
      "TECHNICAL SPECIFICATIONS: Wattage: 2000 W; Capacity: 15L; Star Rating 5; Pressure 8 bar",
  },
  {
    name: "Usha Bloom Goodbye Dust Ceiling Fan",
    poster: "https://m.media-amazon.com/images/I/514PtfA3n7L._SX679_.jpg",
    price: "₹3,395",
    rating: 4.1,
    summary:
      "Blade Size: 1250 Mm, Color: Golden, Brown, Power Source: Corded Electric, Mounting Type: Ceiling Mount",
  },
  {
    name: "Usha 1600 Watt Induction",
    poster: "https://m.media-amazon.com/images/I/610yL--M0RL._SX679_.jpg",
    price: "₹2,299",
    rating: 4.3,
    summary:
      "Keep Warm Function :- This will keep food warm and ready-to-eat after it has been cooked",
  },
  {
    name: "Acnos® Premium Women's Watch",
    poster: "https://m.media-amazon.com/images/I/41P6EFEypDL._SY741_.jpg",
    price: "₹220",
    rating: 4.5,
    summary:
      "Warranty type: Manufacturer; 1 Years Warranty Against Only Manufacture Defects",
  },
];

function App() {
  const productList = INITIAL_PRODUCT_LIST;
  return (
    <div className="App">
      {/* <AddColor /> */}
      <div className="product-list">
        {productList.map((pd) => (
          <Product product={pd} />
        ))}
      </div>
    </div>
  );
}

function Product({ product }) {
  // const product = {
  //   name: "iPhone 13 (128GB)",
  //   poster: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg",
  //   price: "51,499",
  //   rating: 4.5,
  //   summary: "15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
  // }

  // console.log(product.name, product.poster)
  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-rating">⭐{product.rating}</p>
      </div>
      <h3 className="product-price">Price: ₹ {product.price}</h3>
      <p className="product-summary">{product.summary}</p>
    </div>
  );
}

export default App;
