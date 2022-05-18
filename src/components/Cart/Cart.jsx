import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./Cart.module.css";
import { Link, useNavigate} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";


const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext);

  const history = useNavigate()

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.heading}>Lista de Productos: {cart.length}</h2>
        <Button variant="contained" color="error" onClick={() => clear()}>
          Limpiar Carrito
        </Button>
      </div>
      <div>
        {cart.length === 0 && (
          <div>
            <h2 className={styles.texts}>El carrito está vacío</h2>
            <div className={styles.texts}>
              <Button variant="contained" onClick={()=>history("/")}>
                Volver a la página principal
              </Button>
            </div>
          </div>
        )}
      </div>
      {cart.length > 0 &&
        cart.map((p) => (
          <div className={styles.items}>
            <div className={styles.image}>
              <img style={{ height: "120px" }} src={p.image} alt={p.name} />
            </div>
            <div className={styles.about}>
              <h1 className={styles.nombre}>{p.name}</h1>
              <h3 className={styles.description}>{p.description}</h3>
              <p>Precio: &#36;{p.price}</p>
            </div>
            <DeleteIcon onClick={() => removeItem(p.id)}></DeleteIcon>
          </div>
        ))}
      <h2 className={styles.texts}>Valor total: &#36;{totalPrice}</h2>
      <div className={styles.texts}>
        <Button variant="contained" onClick={()=>history("/checkout")}>
          FINALIZAR COMPRA
        </Button>
      </div>
    </div>
  );
};

export default Cart;
