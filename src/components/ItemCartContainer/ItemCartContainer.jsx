import { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import CartContext from "../../context/cart/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { useNavigate } from "react-router-dom";
import EmptyItems from "../EmptyItems/EmptyItems";
import "./ItemCartContainer.css";

function ItemCartContainer() {
  const { cart, totalPriceCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleFinishPurchase = () => {
    Swal.fire({
      title: "¿Finalizar compra?",
      text: `El total a pagar es: $${totalPriceCart}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, finalizar compra",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/checkout");
      }
    });
  };

  return (
    <div className="container">
      {cart.length === 0 ? (
        <EmptyItems message={"Tu carrito está vacío"} />
      ) : (
        <>
          <Row className="mb-3">
            <Col>
              {cart.map((item) => (
                <ItemCart key={item.id} item={item} />
              ))}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <p className="mb-3 total">Total: ${totalPriceCart}</p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-md-end justify-content-center"
            >
              <Button variant="primary" onClick={handleFinishPurchase}>
                Finalizar compra
              </Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default ItemCartContainer;