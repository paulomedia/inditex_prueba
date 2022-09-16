import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../services";
import config from "../../config";
import Items from "../../components/items";
import Message from "../../components/message";
import "./main.css";
import { useDebounce } from "../../app/hooks";

const DELAY_SEARCH = 500;

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, DELAY_SEARCH);

  const {
    data: products,
    error,
    status,
  } = useQuery(["products"], getProducts, config.products);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);

      const regExp = new RegExp(searchTerm, "i");
      const searched = products.filter(
        ({ brand, model }) => regExp.test(brand) || regExp.test(model)
      );
      setSearchedItems(searched);
    } else {
      setIsSearching(false);
      setSearchedItems(products);
    }
  }, [debouncedSearchTerm]);

  if (status !== "success") {
    return <Message status={status} error={error} />;
  }

  return (
    <main className="main">
      <div className="main_header">
        <span>Productos</span>
        <input
          placeholder="Buscar producto"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <article className="article">
        <Items data={isSearching ? searchedItems : products} />
      </article>
    </main>
  );
};

export default Main;
