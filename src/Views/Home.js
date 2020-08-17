import React from 'react';
import HelloWorld from "../Components/HelloWorld";

function Home() {
  return (
    <div>
      <HelloWorld name="Dejan" />
      <h1 className="font-bold text-2xl">This is Home page.</h1>
    </div>
  );
}

export default Home;
