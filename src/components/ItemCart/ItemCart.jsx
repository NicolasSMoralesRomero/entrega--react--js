import { useContext } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import CartContext from "../../context/cart/CartContext";

function ItemCart({ item }) {
  const { deleteItemCart } = useContext(CartContext);

  const handleDelete = (itemId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItemCart(itemId);
        Swal.fire("Eliminado", "El producto ha sido eliminado", "success");
      }
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center mb-3 p-3 border rounded">
      <img
        src={item.image}
        alt={item.title}
        className="mr-3"
        style={{ maxWidth: "80px" }}
      />
      <div className="flex-grow-1">
        <h5 className="mb-2">{item.title}</h5>
        <p className="mb-2">Cantidad: {item.quantity}</p>
        <Button
          variant="danger"
          size="sm"
          onClick={() => handleDelete(item.id)}>
          Eliminar
        </Button>
      </div>
    </div>
  );
}

export default ItemCart;