import Link from "next/link";
import { urlFor } from "../lib/client";

export interface Props {
  product: {
    image: any[];
    name: string;
    slug: {
      current: string;
    };
    price: number;
    details: string
  };
  products?: any[]
}

const Product: React.FC<Props> = ({
  product: { image, name, slug, price },
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0]).url()}
            width={250}
            height={250}
            alt="product-image"
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{price} TL</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
