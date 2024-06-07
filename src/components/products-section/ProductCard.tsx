import { productInfoType } from "./ProductsSection";
import ShadowImg from "../../assets/shadow.png";
import Button from "../ui/button/Button";

type Props = {
  productInfo: productInfoType;
};

const ProductCard = ({ productInfo }: Props) => {
  return (
    <article className="product-card">
      <div className="product-card-img-div">
        <img src={productInfo.img} alt="" />
        <img src={ShadowImg} className="shadow-img" alt="" />
      </div>
      <h3>{productInfo.name}</h3>
      <Button to={`/products/${productInfo.name}`} isLink={true} type="link">
        Shop
      </Button>
    </article>
  );
};

export default ProductCard;
