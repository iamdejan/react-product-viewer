import React from 'react';
import {Link} from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${props.data.id}`}>
        <div style={{
          'backgroundImage': `url('${props.data.thumbnailUrl}')`,
        }}
             className="w-full h-64 bg-blue bg-cover"
        >

        </div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${props.data.id}`}>
            {props.data.title}
          </Link>
        </h3>
        <div className="font-bold mb-3">
          Category #{props.data.albumId}
        </div>
        <Link
          to={`/products/${props.data.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
