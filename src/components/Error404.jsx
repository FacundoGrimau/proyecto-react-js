import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="p-2">- Error -</h1>
                    <h2 className="p-1">404</h2>
                    <p className="p-1">La página que estás buscando no existe!</p>
                    <p className="my-3"> <Link to={"/"} className="btn bg-dark text-white">Volver a la Página Principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;