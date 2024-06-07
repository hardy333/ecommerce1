import "./products-section.css";
import HeadphoneImg from "../../assets/image-headphone.png";
import ProductCard from "./ProductCard";

export type productInfoType = {
  name: string;
  img: string;
  url: string;
};

const productsArr: productInfoType[] = [
  {
    name: "headphones",
    url: "/products/headphones",
    img: HeadphoneImg,
  },
  {
    name: "speakers",
    url: "/products/speakers",
    img: HeadphoneImg,
  },
  {
    name: "earphones",
    url: "/products/earphones",
    img: HeadphoneImg,
  },
];

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="container products-section-container ">
        {/* 1 */}
        {productsArr.map((prod) => {
          return <ProductCard key={prod.name} productInfo={prod} />;
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
