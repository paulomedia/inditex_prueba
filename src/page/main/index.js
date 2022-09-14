import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../services";
import config from "../../config";
import Items from "../../components/items";
import Search from "../../components/search";
import Message from "../../components/message";
import "./main.css";

const Main = () => {
  const [searchedItems, setSearchedItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const {
    data: products,
    error,
    status,
  } = useQuery(["products"], getProducts, config.products);

  /*
  const queryCache = new QueryCache({
    onError: error => {
      console.log(error)
    },
    onSuccess: data => {
      console.log(data)
    }
  })
  const query = queryCache.find('products')
  console.log('Query --> ' ,query)
  */

  if (status !== "success") {
    return <Message status={status} error={error} />;
  }

  const handleSearch = (search) => {
    const regExp = new RegExp(search, "i");
    const searched = products.filter(
      ({ brand, model }) => regExp.test(brand) || regExp.test(model)
    );

    setIsSearching(true);
    setSearchedItems(searched);
  };

  return (
    <main className="main">
      <div className="main_header">
        <span>Productos</span>
        <Search handleSearch={handleSearch} />
      </div>
      <article className="article">
        <Items data={isSearching ? searchedItems : products} />
      </article>
    </main>
  );
};

export default Main;
