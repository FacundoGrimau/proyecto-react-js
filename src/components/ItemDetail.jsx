import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

/* eslint-disable react/prop-types */
const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
        console.log("Agregaste " + quantity + " productos !");
    }

    return (
        <div className="container">
            <div className="card text-start mb-3 border-0">
                <div className="row align-items-center">
                    <div className="col-md-4 p-4 text-center">
                        <img src={item.imagen} className="img-fluid rounded-start" alt={item.nombre} width={250} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-4">
                            <h1 className="fs-3 text-uppercase fw-semibold px-3">{item.nombre}</h1>
                            <p className="fs-4 fw-bold px-3">${item.precio}</p>
                            <p className="fs-6 fst-italic text-secondary px-3">{item.descripcion}</p>
                            <ItemCount stock={item.stock} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;