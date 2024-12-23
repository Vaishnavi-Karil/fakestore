import React, { useEffect } from 'react';
import { useProduct } from '../../../Utility/hooks/useProduct';
import Product from '../../../component/Product/Product';
import './Products.css';
export const Products = () => {
  const { get, details } = useProduct();
  useEffect(() => {
    get();
  }, []);

  console.log('details', details);

  const { loading, error, response } = details;
  const data = response?.data;

  if (loading) return <div> Loading..</div>;

  if (error) return <div>Something Went Wrong..</div>;

  if (!data || data.length === 0) return <div> No Product Found!</div>;

  return (
    <div>
      <h1>Products</h1>
      <div
        // style={{
        //   display: 'grid',
        //   gridTemplateColumns: 'repeat(auto-fit, 1fr)',
        //   gap: '1rem',
        // }}
        className="wrapper"
      >
        {data &&
          data.map((product) => {
            console.log('product', product);
            const {
              id,
              title,
              price,
              description,
              category,
              image,
              rating: { count, rate },
            } = product;
            return (
              <Product
                id={id}
                title={title}
                price={price}
                // description={description}
                category={category}
                image={image}
                count={count}
                rate={rate}
              />
            );
          })}
      </div>
    </div>
  );
};
