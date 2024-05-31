import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Item = ({item}) => {
    return (
        <div className="col-md-4 text-center">
            <Link to={/item/ + item.id} className="text-decoration-none">
                <div className="card border-white mb-3 p-3">
                    <img src={item.imagen} className="img-fluid rounded" alt={item.nombre} />
                    <div className="card-body">
                        <p className="card-text small text-uppercase">{item.nombre}</p>
                        <p className="card-text fs-5"><b>${item.precio}</b></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;