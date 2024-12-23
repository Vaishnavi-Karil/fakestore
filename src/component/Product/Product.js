import React from 'react';

export default function Product({
  id,
  image,
  title,
  description,
  category,
  price,
  count,
  rate,
}) {
  return (
    <div
      key={id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid grey',
        borderRadius: '2rem',
        width: '14rem',
        minHeight: '26rem',
        padding: '2rem',
      }}
    >
      <div>
        <img src={image} alt={title} width="200px" height="200px" />
      </div>
      <div>
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
        <p>Category : {category}</p>
        <p>Price : {price} $</p>
        <p>Count {count}</p>
        <p>Rate : {rate}</p>
      </div>
    </div>
  );
}
