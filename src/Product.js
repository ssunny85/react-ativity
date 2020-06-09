import React from "react";
import ProductItem from "./components/ProductItem/index";
import './product.scss';

function Product({ products }) {
  return (
    <div className="weekly">
      {products.map(product => (
        <div className="weekly-block" key={product.id}>
          <strong>{product.name}</strong>
          <div className="product-wrap">
            {product.products.map(item =>
              <ProductItem product={item} key={item.id} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
