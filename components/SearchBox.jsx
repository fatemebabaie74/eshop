// import { useRouter } from "next/router";
// import React, { useRef } from "react";
// import styles from './SearchBox.module.css'
// const SearchBox = () => {
//   const textForSearch = useRef("");
//   const router = useRouter();
//   const clickHandler = () => {
//     //console.log(textForSearch.current.value);

//     router.push(`/products/search/${textForSearch.current.value}`);
//   };
//   return (
//     <div  className={`${styles.outerContainer}`}>
//       <input type="text" ref={textForSearch} />
//       <button onClick={clickHandler}>search</button>
      
//     </div>
//   );
// };

// export default SearchBox;




import { useRouter } from "next/router";
import React, { useRef } from "react";
import styles from './SearchBox.module.css'
import { FaSistrix } from "react-icons/fa6";

const SearchProduct = () => {
  const textForSearch = useRef();
  const router = useRouter("");

  const clickHandier = () => {
    router.push(`/products/search/${textForSearch.current.value}`);
  };

  return (
    <div className={`${styles.outerContainer}`}>

      <input
        className={`${styles.searchcontainer}`}
        type="text"
        ref={textForSearch}
        placeholder="جستجو"
        autoComplete="off"
      />
      <button
        className={`${styles.searchButton}`}
        type="button"
        onClick={clickHandier}
      >
      <FaSistrix className={`${styles.searchIcon}`}/>
      </button>
    </div>
  );
};

export default SearchProduct;
