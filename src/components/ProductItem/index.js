import React from "react";
import './style.scss';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <div className="product__photo">
        <img src={product.thumbnail.small} alt="" />
      </div>
      <div className="product__contents">
        <span className="product__city">{product.cities[0].name}</span>
        <strong className="product__name">{product.title}</strong>
        <div className="product__price">
          <strong className="product__price--sale">{product.price.sale}원</strong>
          <del className="product__price--normal">{product.price.normal}원</del>
        </div>
        <div className="product__information">
          <span className="">별점: {product.review.score}점</span>
          <span className="">조회: {product.viewCount}</span>
          <span className="">리뷰: {product.review.count}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
