import './cartbtn.css'
import PropTypes from 'prop-types'



const CartBtn = ({lengthDelCarrito}) => {

    CartBtn.propTypes = {
        lengthDelCarrito: PropTypes.number
    }

    return (
        <li className="nav-item">
            <div className="contadorCarrito"><p id="numero">{lengthDelCarrito}</p></div>
            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><box-icon type='solid' name='cart'></box-icon></button>
        </li>
    )
}

export default CartBtn