import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador)
            setContador(1);
            setVisible(false)
        }
    }

    useEffect (() => {
        setItemStock(stock);
    }, [stock])


    return (
        <div className="container">
            <div className="row my-1">
                <div className="col mx-1">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn bg-dark text-white border-white rounded-0" onClick={decrementar}> - </button>
                        <button type="button" className="btn bg-dark text-white border-white rounded-0">{contador}</button>
                        <button type="button" className="btn bg-dark text-white border-white rounded-0" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col mx-1">
                    {visible ? <button type="button" className="btn btn-outline-dark text-uppercase rounded-0" onClick={addToCart}>Agregar Al Carrito</button> : <Link to={"/cart"} className="btn btn-outline-dark text-uppercase rounded-0">Finalizar Compra</Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;