import './details.css'
import data from '../../Components/MockData/MockData.jsx'
import { useParams } from "react-router-dom"
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = ({arrayCart, setArrayCart, lengthDelCarrito, setLengthDelCarrito}) => {

    const id = useParams(data);
    const index = parseInt(id.articulo);

    
    const obtenerDetailsSneaker = data.filter(obtenerSneaker => obtenerSneaker.id == index);
    

    Details.propTypes = {
        arrayCart: PropTypes.array,
        lengthDelCarrito: PropTypes.number,
        setArrayCart: PropTypes.func,
        setLengthDelCarrito: PropTypes.func
    }

    const addToCart = (e) => {
        e.preventDefault();
        let datos = e.target;
        const articuloAlCarrito = {
            id: obtenerDetailsSneaker[0].id,
            articulo: obtenerDetailsSneaker[0].articulo,
            img1: obtenerDetailsSneaker[0].imgs.img1,
            precio: obtenerDetailsSneaker[0].precio,
            talle: datos.select.value
        }
        arrayCart.push(articuloAlCarrito)
        setArrayCart(arrayCart)
        console.log(arrayCart)

        lengthDelCarrito = arrayCart.length;
        setLengthDelCarrito(lengthDelCarrito)
        console.log(lengthDelCarrito)
        toast("Se agrego al carrito", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    

    return (
        <div className='detailsPage'>
            <div className="contenidoDetails">
                <div className="imagenes">
                    <img src={obtenerDetailsSneaker[0].imgs.img1} alt={obtenerDetailsSneaker[0].articulo} />
                    <img src={obtenerDetailsSneaker[0].imgs.img2} alt={obtenerDetailsSneaker[0].articulo} />
                    <img src={obtenerDetailsSneaker[0].imgs.img3} alt={obtenerDetailsSneaker[0].articulo} />
                    <img src={obtenerDetailsSneaker[0].imgs.img4} alt={obtenerDetailsSneaker[0].articulo} />
                    <img src={obtenerDetailsSneaker[0].imgs.img5} alt={obtenerDetailsSneaker[0].articulo} />
                    <img src={obtenerDetailsSneaker[0].imgs.img6} alt={obtenerDetailsSneaker[0].articulo} />

                </div>
                <div className="caracteristicas">
                    <h3 className="modelo">
                        {obtenerDetailsSneaker[0].articulo}
                    </h3>
                    <h6 className="precio">
                        uS${obtenerDetailsSneaker[0].precio}
                    </h6>
                    <div className="size">
                        <h6>Seleccione su talle:</h6>
                        <p className="guiaTalles" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Guia de talles.
                        </p>

                        <form className="listaTalles" onSubmit={addToCart}>
                            <select className='select' name='select'>
                                <option value={obtenerDetailsSneaker[0].size.siete}>{obtenerDetailsSneaker[0].size.siete}</option>
                                <option value={obtenerDetailsSneaker[0].size.sieteMedio}>{obtenerDetailsSneaker[0].size.sieteMedio}</option>
                                <option value={obtenerDetailsSneaker[0].size.ocho}>{obtenerDetailsSneaker[0].size.ocho}</option>
                                <option value={obtenerDetailsSneaker[0].size.ochoMedio}>{obtenerDetailsSneaker[0].size.ochoMedio}</option>
                                <option value={obtenerDetailsSneaker[0].size.nueve}>{obtenerDetailsSneaker[0].size.nueve}</option>
                                <option value={obtenerDetailsSneaker[0].size.nueveMedio}>{obtenerDetailsSneaker[0].size.nueveMedio}</option>
                                <option value={obtenerDetailsSneaker[0].size.diez}>{obtenerDetailsSneaker[0].size.diez}</option>
                                <option value={obtenerDetailsSneaker[0].size.diezMedio}>{obtenerDetailsSneaker[0].size.diezMedio}</option>
                                <option value={obtenerDetailsSneaker[0].size.once}>{obtenerDetailsSneaker[0].size.once}</option>
                                <option value={obtenerDetailsSneaker[0].size.onceMedio}>{obtenerDetailsSneaker[0].size.onceMedio}</option>
                                <option value={obtenerDetailsSneaker[0].size.doce}>{obtenerDetailsSneaker[0].size.doce}</option>
                            </select>
                            <input type="submit" value="Agregar al carrito" className="btn addToCart" />
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Guia de talles</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;



// console.log(obtenerDetailsSneaker[0].imgs.img1)
    // console.log(urlFija + obtenerDetailsSneaker[0].imgs.img1)
    // console.log(obtenerDetailsSneaker[0].articulo)


    // toast.success('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    // });