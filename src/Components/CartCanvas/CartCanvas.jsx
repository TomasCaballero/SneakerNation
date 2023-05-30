import { Link } from 'react-router-dom';
import './cartcanvas.css'
import PropTypes from 'prop-types'



// eslint-disable-next-line no-unused-vars
const CartCanvas = ({arrayCart, lengthDelCarrito, setArrayCart, setLengthDelCarrito}) => {

    CartCanvas.propTypes = {
        arrayCart: PropTypes.array,
        lengthDelCarrito: PropTypes.number,
        setArrayCart: PropTypes.func,
        setLengthDelCarrito: PropTypes.func
    }

    console.log(arrayCart)
    console.log(arrayCart.length)

    const precioTotal = arrayCart.reduce((acc, prod) => acc + prod.precio, 0)

    
    const eliminarDelCarrito = (itemId)=>{
        let index = arrayCart.findIndex(item => item.id === itemId);
        console.log(index)
        arrayCart.splice(index, 1)
        console.log(arrayCart.length)
        setArrayCart(arrayCart)
        setLengthDelCarrito(arrayCart.length)
    }

    return (
        <div>
            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <div className="headerCerrar">
                        <h5 id="offcanvasRightLabel">Tu carrito contiene {lengthDelCarrito} {lengthDelCarrito == 1 ? 'articulo' : 'articulos'}</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="precioTotalPagar">
                        <div className="total">Total: uS${precioTotal}</div>
                        <Link to={'/cart'} style={{ textDecoration:'none'}}>
                            <div className="pagar" data-bs-dismiss="offcanvas">Pagar</div>
                        </Link>
                    </div>
                </div>
                <div className="offcanvas-body">
                    {
                        arrayCart.length == 0 ?
                            (<h5>El carrito esta vacio</h5>)
                            :
                            (<div className="contenedorCarrito">
                                {
                                    arrayCart.map(item => (
                                        <Link to={`/sneakers/details/${item.id}`} key={item.id} style={{ textDecoration:'none'}}>
                                            <div key={item.id} className="card">
                                                <div className="nombre"><h6>{item.articulo}</h6></div>
                                                <div className='img'><img src={item.img1} alt={item.articulo} /></div>
                                                <div className="precioTalle">
                                                    <p className='talle'>Talle: {item.talle}</p>
                                                    <p className="precio">Precio: uS${item.precio}</p>
                                                </div>
                                                <div className="btnRemove">
                                                    <div className="btn" onClick={()=> eliminarDelCarrito(item.id)}>Eliminar</div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default CartCanvas