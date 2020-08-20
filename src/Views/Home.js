import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

function Home() {
  const [state, setState] = useState({
    loading: true,
    productList: null,
    error: null,
  });

  const url = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    console.log("Get photos...");
    axios.get(url).then(response => {
      setState({
        loading: false,
        productList: response.data,
        error: null,
      });
    }).catch(reason => {
      console.log(JSON.stringify(reason));
      setState({
        loading: false,
        productList: null,
        error: {
          code: 0,
          message: reason.toString()
        }
      });
    });
  }, [url]);

  let content = null;
  if(!state.loading && state.productList) {
    content = state.productList.map((product) => {
      return (
        <div key={product.id}>
          <ProductCard data={product} />
        </div>
      );
    });
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
      <h1 className="font-bold text-2xl">
        Best Sellers
      </h1>
      {content}
    </div>
  );
}

export default Home;
