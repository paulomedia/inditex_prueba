import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../../services";
import Actions from "../../components/actions";
import Description from "../../components/description";
import Message from "../../components/message";
import Image from "../../components/image";
import "./detail.css";

const Detail = () => {
  const [searchParams] = useSearchParams("");
  const id = searchParams.get("id");

  const {
    data: product,
    error,
    status,
  } = useQuery(["product", id], () => getProduct(id), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (status !== "success") {
    return <Message status={status} error={error} />;
  }

  return (
    <main className="detail">
      <article className="article">
        <div className="image">
          <Image imgUrl={product.imgUrl} />
        </div>
        <div className="others">
          <div>{product && <Description data={product} />}</div>
          <div className="actions">{product && <Actions data={product} />}</div>
        </div>
      </article>
    </main>
  );
};

export default Detail;
