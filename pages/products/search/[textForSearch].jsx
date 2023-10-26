import React from "react";
import styles from "./[textForSearch].module.css";
import { GET } from "../../../repository/FetchApiRepository";
import Card from "../../../components/Card";

const textForSearch = ({ data }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {data.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export default textForSearch;
export async function getServerSideProps(context) {
  const response = await GET(
    `/products/search/${context.params.textForSearch}`
  );
  const data = await response.json();
  if (data.length === 0)
    return {
      notFound: true,
    };

  return {
    props: { data },
  };
}
