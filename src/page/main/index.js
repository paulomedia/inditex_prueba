import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../services";
import config from "../../config";
import Items from "../../components/items";
import Message from "../../components/message";
import { useDebounce } from "../../hooks/useDebounce";
import { Typography } from "@mui/material";
import Search from "../../components/search";
import "./main.css";

const DELAY_SEARCH = 500;
const TITLE = "Productos";

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
        <Typography color="text.primary" variant="h4">
          {TITLE}
        </Typography>
        <Search handleSearch={setSearchTerm} />
      </div>
      <article className="article">
        <Items data={isSearching ? searchedItems : products} />
      </article>
    </main>
  );
};

export default Main;
