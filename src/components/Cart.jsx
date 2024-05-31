import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/images/trash3-fill.svg";

const Cart = () => {
    const {cart, removeItem, clear, getCountProducts, getSumProducts} = useContext(CartContext);

    if(getCountProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-secondary" role="alert">
                            <h3 className="p-1">No se encontraron Productos en el Carrito!</h3>
                            <Link to={"/"} className="btn bg-black text-white p-2">Volver a la Página Principal</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn text-white bg-dark rounded-0" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={100}/></td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-end"><img src={trash} width={22} alt="Eliminar Producto" title="Eliminar Producto" onClick={() => {removeItem(item.id)}}/></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-center"><b>Total</b></td>
                                <td className="text-center"><b>${getSumProducts()}</b></td>
                                <td>&nbsp;</td>
                                <td className="text-end">Checkout</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;
