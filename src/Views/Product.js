import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Loader from "../Components/Loader";

function Product() {
  const [state, setState] = useState({
    loading: true,
    product: null,
    error: null,
  });

  const {id} = useParams();
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

  useEffect(() => {
    console.log(`Get photo by id ${id}...`);
    axios.get(url).then(response => {
      setState({
        loading: false,
        product: response.data,
        error: null,
      });
    }).catch(reason => {
      console.log(JSON.stringify(reason));
      setState({
        loading: false,
        product: null,
        error: {
          code: 0,
          message: reason.toString()
        }
      });
    });
  }, [url, id]);

  let content = null;
  if(!state.loading && state.product != null) {
    content = <div>
      <h1 className="text-2xl font-bold mb-3">
        {state.product.title}
      </h1>
      <div>
        <img src={state.product.url} alt={state.product.title} />
      </div>
      <div className="font-bold mb-3">
        Category #{state.product.albumId}
      </div>
    </div>;
  } else if(!state.loading && state.error) {
    content = <div className="font-bold text-2xl text-center text-red-700">
      <p>There was an error.</p>
      <p>Please try again later.</p>
    </div>;
  } else if(state.loading) {
    content = <Loader />;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Product;
