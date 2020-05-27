import React from "react";
import './style.scss';

function ProductItem() {
  return (
    <div className="product-item">
      <div className="product__photo">
        <img src="" alt="" />
      </div>
      <div className="product__contents">
        <span className="product__city">서울</span>
        <strong className="product__name">[서울] 창경궁 야간 프라이빗 투어 + 스냅 사진</strong>
        <div className="product__price">
          <strong className="product__price--sale">21,900원</strong>
          <del className="product__price--normal">43,000원</del>
        </div>
        <div className="product__information">
          <span className="">2020년 5월 29일부터 사용가능</span>
          <span className="">별점: 4점</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
