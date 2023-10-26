import { useRouter } from "next/router";
import React from "react";
import { GET } from "../../../repository/FetchApiRepository";
import Card from "../../../components/Card";
import styles from "./[cat].module.css";

const cat = ({ data }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {data.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export default cat;

export async function getServerSideProps(context) {
  //   const router = useRouter();
  //   console.log(router.query);
  //console.log(context.params);
  const response = await GET(`/products/${context.params.cat}`);
  const data = await response.json();
  return {
    props: { data },
  };
}
