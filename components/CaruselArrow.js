import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './CaruselArrow.module.css'
export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${styles.nextArrow}`}>
      <IoIosArrowForward 
      className={`${styles.nextsvg}`}
      onClick={onClick}
      />
      
    </div>
    
      // className={className}
      // style={{
        // ...style,
        // width: `${props.width}`,
        // height: `${props.height}`,
        // margin: "auto",
        // zIndex: "10000",
        // color: "black",
      // }}

     
    
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${styles.prevArrow}`}>
    <IoIosArrowBack 
    className={`${styles.nextsvg}`}
    onClick={onClick}
    />
    
  </div>
    // <IoIosArrowBack
    //   className={className}
    //   style={{
    //     // ...style,
    //     // width: "30px",
    //     // margin: "auto",
    //     // height: "30px",
    //     // marginLeft: "10px",
    //     // zIndex: "10000",
    //     // color: "black",
    //   }}
    //    onClick={onClick}
    
  );
}
