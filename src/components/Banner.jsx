import bannerRemera from "../assets/images/banner-remera.jpg";
import bannerPantalon from "../assets/images/banner-pantalon.jpg";
import bannerSweater from "../assets/images/banner-sweater.jpg";
import bannerCalzado from "../assets/images/banner-calzado.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="container-fluid">
            <div className="row p-5">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerRemera})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:350, marginRight:25}}>
                    <Link to={"/category/remeras"} className="text-decoration-none">    
                        <span className="bg-black text-white text-uppercase px-3 py-2">Remeras</span>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerPantalon})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:350}}>
                    <Link to={"/category/pantalones"}  className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Pantalones</span>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerSweater})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:350, marginLeft:25}}>
                    <Link to={"/category/sweaters"}  className="text-decoration-none">  
                        <span className="bg-black text-white text-uppercase px-3 py-2">Sweaters</span>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerCalzado})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:350, marginLeft:25}}>
                    <Link to={"/category/calzados"}  className="text-decoration-none">     
                        <span className="bg-black text-white text-uppercase px-3 py-2">Calzados</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;