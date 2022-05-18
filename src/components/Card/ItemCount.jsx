import React, { useState , useContext} from "react";
import Button from "@mui/material/Button";
import styles from "./ItemCount.module.css";
import { CartContext } from '../../Context/CartContext';



function ItemCount({ stock, product}) {
  const [count, setCount] = useState(0);

  const { addItem, cart} = useContext(CartContext);
  
  function adding() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function subs() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const handleClick = () => {
    if (count !== 0){
        addItem({...product.product, count});
        setCount(0);
        console.log(cart)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonStyle}>
        <Button onClick={subs} variant="outlined" color="error">
          -
        </Button>
        <p>{count}</p>
        <Button onClick={adding} variant="outlined" color="success">
          +
        </Button>
        <br />
      </div>
      <Button onClick={handleClick} variant="contained" color="primary">
          Agregar al carro
      </Button>
    </div>
  );
}

export default ItemCount;
