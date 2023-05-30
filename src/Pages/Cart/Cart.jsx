import Footer from '../../Components/Footer/Footer';
import './cart.css'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Cart = ({ arrayCart, lengthDelCarrito, setArrayCart, setLengthDelCarrito, precioTotal }) => {

    Cart.propTypes = {
        arrayCart: PropTypes.array,
        lengthDelCarrito: PropTypes.number,
        setArrayCart: PropTypes.func,
        setLengthDelCarrito: PropTypes.func,
        precioTotal: PropTypes.number
    }

    console.log(arrayCart)
    console.log(lengthDelCarrito)

    const eliminarDelCarrito = (itemId) => {
        let index = arrayCart.findIndex(item => item.id === itemId);
        console.log(index)
        arrayCart.splice(index, 1)
        console.log(arrayCart.length)
        setArrayCart(arrayCart)
        setLengthDelCarrito(arrayCart.length)
    }

    const MySwal = withReactContent(Swal)
    const pagar = () => {
        const collection = document.getElementsByClassName('modal-body'); // Obtienes el HTMLCollection
        const form = collection[1]; // Accedes al formulario dentro del HTMLCollection
        const inputs = form.getElementsByTagName('input'); // Obtienes los elementos input dentro del formulario

        // Recorres los elementos input y obtienes sus valores
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            const valor = input.value;
            if(valor == ''){
                MySwal.fire({
                    icon: 'error',
                    title: 'Debe completar todos los campos'
                })
            }else{
                MySwal.fire({
                    icon: 'success',
                    title: 'Compra realizada'
                })
            }
        }
    }



    return (
        <div className='cartContainer'>
            <div className="contenido">
                {
                    lengthDelCarrito == 0 ? (
                        <h5>El carrito esta vacio</h5>
                    ) :
                        (
                            <div className='contenidoo'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th colSpan={5} className='tituloTable'>Tu carrito</th>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <th>Articulo</th>
                                            <th>Talle</th>
                                            <th></th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {arrayCart.map(item => (
                                            <tr key={item.id}>
                                                <td className='tdImg'><img src={item.img1} alt="" /></td>
                                                <td className='tdArticulo'>{item.articulo}</td>
                                                <td>{item.talle}</td>
                                                <td className='tdBtn'><div className="btnRemove" onClick={() => eliminarDelCarrito(item.id)}>Eliminar</div></td>
                                                <td className='tdPrecio'>uS${item.precio}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={4} className='total'>Precio total:</td>
                                            <td className='tdPrecio'>us${precioTotal}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="btnPagar" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Continuar</div>
                            </div>
                        )
                }
            </div>
            <Footer />
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Complete el formulario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form modal-body' action="" onSubmit={(e) => { e.preventDefault() }}>
                                <input type="text" name="" id="inputNombre" placeholder='Nombre/s' />
                                <input type="text" name="" id="inputApellido" placeholder='Apellido/s' />
                                <input type="email" name="" id="inputCorreo" placeholder='Correo' />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btnPagar" onClick={pagar}>Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart






