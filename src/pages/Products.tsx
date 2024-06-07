import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface ProductType {
  id: number;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

export type ProductsType = ProductType[];

const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState<null | ProductsType>(null);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/products");

    const data = await res.json();

    setProducts(data);

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Products - {params.productName}</h1>
      {products
        ?.filter((product) => product.category === params.productName)
        .map((product) => {
          return (
            <div key={product.id}>
              <img
                width={400}
                src={`http://localhost:5173/${product.image.desktop}`}
                alt=""
              />
              <p>{product.name}</p>
              <p>{product.id}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
