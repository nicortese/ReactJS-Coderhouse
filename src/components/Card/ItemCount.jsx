import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./ItemCount.module.css";

function ItemCount({ stock, cartAdd}) {
  const [count, setCount] = useState(0);

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
  function onAdd() {
    alert("Agregaste " + count + " productos a tu carrito");
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
      <Button onClick={() => cartAdd(count)} variant="contained" color="primary">
          Agregar al carro
        </Button>
    </div>
  );
}

export default ItemCount;
