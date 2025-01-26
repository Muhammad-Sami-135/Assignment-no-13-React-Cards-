import React from "react";
import { productData } from "../Data/Data";
import MultiActionAreaCard from "../Cards/Cards";

export const Product = () => {
  console.log(productData);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "20px",
        columnGap: "30px",
      }}
    >
      {productData &&
        productData.map((e, i) => {
          return (
            <MultiActionAreaCard
              key={i}
              CardId={e.id}
              imgSrc={e.image}
              title={e.title}
              desc={e.description}
              ratting={e.rating.count}
            />
          );
        })}
    </div>
  );
};
