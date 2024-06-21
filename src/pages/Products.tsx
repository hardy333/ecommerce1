import { Link, useParams } from "react-router-dom";

import "./products.css";
import { useQuery } from "@tanstack/react-query";

export interface ProductType {
  id: string;
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
  // const [products, setProducts] = useState<null | ProductsType>(null);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/products");

    const data = await res.json();

    return data;
    // setProducts(data);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  const {
    data: products,
    isError,
    isLoading,
  } = useQuery<ProductsType>({
    queryKey: ["products"],
    queryFn: getData,
  });

  if (isError) {
    return (
      <div>
        <p>Something went wrong, please try again!</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading !!</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Products - {params.productName}</h1>
      {products
        ?.filter((product) => product.category === params.productName)
        .map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <img width={400} src={`/${product.image.desktop}`} alt="image" />
              <div>
                <p>{product.name}</p>
                <p>{product.id}</p>

                <Link to={`/products/${params.productName}/${product.id}`}>
                  See details
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
