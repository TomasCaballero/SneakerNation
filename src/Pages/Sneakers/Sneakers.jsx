import Footer from '../../Components/Footer/Footer'
import ItemList from '../../Components/ItemList/ItemList'
import './sneakers.css'

const Sneakers = () => {
    return (
        <div className='sneakersPage'>
            <div className="bannerSneakers">
                <div className="opacidad">
                    <h4 className='title'>Encuentra tu estilo único con nuestras zapatillas exclusivas.</h4>
                </div>
            </div>
            <ItemList/>
            <Footer/>
        </div>
    )
}

export default Sneakers