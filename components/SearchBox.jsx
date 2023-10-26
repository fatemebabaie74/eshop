import { useRouter } from "next/router";
import React, { useRef } from "react";

const SearchBox = () => {
  const textForSearch = useRef("");
  const router = useRouter();
  const clickHandler = () => {
    //console.log(textForSearch.current.value);

    router.push(`/products/search/${textForSearch.current.value}`);
  };
  return (
    <div>
      <input type="text" ref={textForSearch} />
      <button onClick={clickHandler}>search</button>
    </div>
  );
};

export default SearchBox;
