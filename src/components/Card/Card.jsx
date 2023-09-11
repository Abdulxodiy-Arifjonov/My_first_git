import { Button } from "antd";
import React from "react";
import {ShoppingCartOutlined} from '@ant-design/icons';

const Card = (props) => {
  const { title, description, price, rating, image, category} = props.item;

  function titlelength(ftitle) {
    if (ftitle.length > 13) {
      return ftitle.slice(0, 13) + "...";
    } else {
      return ftitle;
    }
  }

  function deslength(ftitle) {
    if (ftitle.length > 50) {
      return ftitle.slice(0, 50) + "...";
    } else {
      return ftitle;
    }
  }

  return (
    <div className="box">
      <div className="image_cover">
        <img src={image} alt="" />
      </div>
      
      <p className="category">{category}</p>
      <h3>{titlelength(title)}</h3>
      <h5>Rating: {rating.rate}</h5>
      <div className="price_cover">
           <h4 className="price">{price}$</h4>
      </div>
      <Button icon={<ShoppingCartOutlined />}>Sotib olish</Button>
    </div>
  );
};

export default Card;
