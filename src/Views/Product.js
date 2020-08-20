import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Product() {
  const {id} = useParams();
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

  const [state, setState] = useState({
    loading: true,
    product: null
  });

  let content = null;

  useEffect(() => {
    axios.get(url).then(response => {
      setState({
        loading: false,
        product: response.data
      });
    });
  }, [url]);

  if(!state.loading && state.product != null) {
    content = <div>
      <h1 className="text-2xl font-bold mb-3">
        Product #{state.product.id}
      </h1>
      <div>
        <img src={state.product.url} alt={state.product.title} />
      </div>
      <div className="font-bold mb-3">
        No. category: {state.product.albumId}
      </div>
    </div>;
  } else {
    content = <p>...loading</p>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Product;
