import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.filter(item => item.precio < 50000));
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setCart(respuesta);
        })
    }, [])

    const calcularTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio, 0);  
    }

    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone}
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}))
        const order = {buyer:buyer, items:items, total:calcularTotal()};
        console.log(order);
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

                        <button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button>

                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => {
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80}/></td>
                                    <td>{item.nombre}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            })}
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-end"><b>${calcularTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    
                </div>
            </div>
        </div>

    )
}

export default Checkout;