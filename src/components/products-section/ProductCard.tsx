import { productInfoType } from "./ProductsSection";
import ShadowImg from "../../assets/shadow.png";
import Button from "../ui/button/Button";
import { motion } from "framer-motion";

type Props = {
  productInfo: productInfoType;
  index: number;
};

const ProductCard = ({ productInfo, index }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      // viewport={{ once: true }}
      // onViewportEnter={() => {
      //   console.log("hello");
      // }}
      className="product-card"
    >
      <div className="product-card-img-div">
        <img src={productInfo.img} alt="" />
        <img src={ShadowImg} className="shadow-img" alt="" />
      </div>
      <h3>{productInfo.name}</h3>
      <Button to={`/products/${productInfo.name}`} isLink={true} type="link">
        Shop
      </Button>
    </motion.article>
  );
};

export default ProductCard;
