import './principal.css'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'
import foto5 from './assets/foto5.jpg'
import foto6 from './assets/foto6.jpg'
import foto7 from './assets/foto7.jpg'
import foto8 from './assets/foto8.jpg'
import foto9 from './assets/foto9.jpg'
import foto10 from './assets/foto10.jpg'

const Principal = () => {
    return (
        <div className='galeria'>
            <img src={foto1} alt="" />
            <img src={foto7} alt="" />
            <img src={foto2} alt="" />
            <img src={foto8} alt="" />
            <img src={foto3} alt="" />
            <img src={foto9} alt="" />
            <img src={foto5} alt="" />
            <img src={foto10} alt="" />
            <img src={foto4} alt="" />
            <img src={foto6} alt="" />
        </div>
    )
}

export default Principal