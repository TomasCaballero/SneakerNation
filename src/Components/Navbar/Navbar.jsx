import { Link } from 'react-router-dom'
import CartBtn from '../CartBtn/CartBtn'
import CartCanvas from '../CartCanvas/CartCanvas'
import PropTypes from 'prop-types'

import './navbar.css'


// eslint-disable-next-line react/prop-types
const Navbar = ({arrayCart, lengthDelCarrito, setArrayCart, setLengthDelCarrito}) => {

    Navbar.propTypes = {
        arrayCart: PropTypes.array,
        lengthDelCarrito: PropTypes.number,
        setArrayCart: PropTypes.func,
        setLengthDelCarrito: PropTypes.func
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                        <Link to={"/"}>
                            <a className="navbar-brand" href="#">SneakerNation</a>
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <box-icon name='menu' color='#ffffff' ></box-icon>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"}>
                                    <a className="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/sneakers"}>
                                    <a className="nav-link" href="#">Sneakers</a>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to={"/contacto"} style={{ textDecoration: 'none' }}>
                                    <a className="nav-link" href="#">Contacto</a>
                                </Link>
                            </li> */}
                            <CartBtn lengthDelCarrito={lengthDelCarrito}/>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartCanvas arrayCart={arrayCart} lengthDelCarrito={lengthDelCarrito} setArrayCart={setArrayCart} setLengthDelCarrito={setLengthDelCarrito}/>
        </>
    )
}

export default Navbar