import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Product() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  let content = null;
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

  useEffect(() => {
    axios.get(url).then(response => {
      setProduct(response.data);
    });
  }, [url]);

  if(product) {
    content = <div>
      <h1 className="text-2xl font-bold mb-3">
        Product #{product.id}
      </h1>
      <div>
        <img src={product.url} alt={product.title} />
      </div>
      <div className="font-bold mb-3">
        No. category: {product.albumId}
      </div>
    </div>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Product;
