import { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, getCountProducts, getSumProducts } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone}
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}))
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:currentDate, total:getSumProducts()};
        
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        });
    }

    if (getCountProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3 className="p-1">No se encontraron Productos en el Carrito!</h3>
                        <Link to={"/"} className="btn bg-dark text-white p-2">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telephone</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}}/>
                        </div>

                        <button type="button" className="btn text-white bg-dark rounded" onClick={generarOrden}>Generar Orden</button>

                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={80}/></td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">x{item.quantity}</td>
                                    <td className="align-middle text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td  className="bg-body-secondary" colSpan={3}><b>Total</b></td>
                                <td className="text-end bg-body-secondary"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-info" role="alert">Felicitaciones! Tu ID de Compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>

    )
}

export default Checkout;