import { useState } from "react"
import Item from "../Item/Item"
import data from '../MockData/MockData.jsx'
import { Link } from 'react-router-dom'
import './itemlist.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const ItemList = () => {
    const [dataFiltrada, setDataFiltrada] = useState(data)
    
    const filtrarAirMax = async () => {
        const airMax = document.getElementById('Air Max')
        const valor = await airMax.value;
        let sneakersFiltradosAirMax = data.filter(filtroAirMax => filtroAirMax.tipo == valor)
        setDataFiltrada(sneakersFiltradosAirMax)
    }
    const filtrarNikeDunk = async () => {
        const nikeDunk = document.getElementById('Nike Dunk')
        const valor = await nikeDunk.value;
        let sneakersFiltradosNikeDunk = data.filter(filtroAirMax => filtroAirMax.tipo == valor)
        setDataFiltrada(sneakersFiltradosNikeDunk)
    }
    const filtrarJordan = async () => {
        const jordan = document.getElementById('Jordan')
        const valor = await jordan.value;
        let sneakersFiltradosJordan = data.filter(filtroAirMax => filtroAirMax.tipo == valor)
        setDataFiltrada(sneakersFiltradosJordan)
    }
    const filtrarAirForce = async () => {
        const airForce = document.getElementById('Air Force')
        const valor = await airForce.value;
        let sneakersFiltradosAirForce = data.filter(filtroAirMax => filtroAirMax.tipo == valor)
        setDataFiltrada(sneakersFiltradosAirForce)
    }
    const noFiltrarPorTipo = async () => {
        await setDataFiltrada(data)
    }


    const MySwal = withReactContent(Swal)
    const filtrarPorPrecio = () => {
        const precio = document.getElementById('precio')
        const precioValue = precio.value

        if (precioValue == '') {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡No ingreso precio máximo!'
            })
        } else {
            let dataFiltradaPorPrecio = dataFiltrada.filter(product => product.precio <= precioValue)
            setDataFiltrada(dataFiltradaPorPrecio)
        }
    }

    const ordenarMenorAMayor = () => {
        const dataOrdenada = [...dataFiltrada].sort((a, b) => a.precio - b.precio);
        setDataFiltrada(dataOrdenada);
    };
    const ordenarMayorAMenor = () => {
        const dataOrdenada = [...dataFiltrada].sort((a, b) => b.precio - a.precio);
        setDataFiltrada(dataOrdenada);
    };


    return (
        <div className="contenedorProductos">
            <div className="barraFiltros">
                <div id="orden">
                    <h3>Ordenar precio de:</h3>
                    <div className="opciones">
                        <div id="menorAMayor" className="btn" onClick={ordenarMenorAMayor}>Menor a Mayor</div>
                        <div id="mayorAMenor" className="btn" onClick={ordenarMayorAMenor}>Mayor a Menor</div>
                    </div>
                </div>
                <div id="filtro">
                    <h3>Filtrar por:</h3>
                    <div action="filtrarPorTipo" className="formFiltrarPorTipo" name="form">
                        <div className="tituloFiltro">Tipo de modelo:</div>
                        <div onClick={noFiltrarPorTipo}>
                            <input type="radio" name="tipo" id="all" value='all' />
                            <label htmlFor="all">All</label>
                        </div>
                        <div onClick={filtrarAirMax}>
                            <input type="radio" name="tipo" id="Air Max" value='Air Max' />
                            <label htmlFor="Air Max">Air Max</label>
                        </div>
                        <div onClick={filtrarNikeDunk}>
                            <input type="radio" name="tipo" id="Nike Dunk" value='Nike Dunk' />
                            <label htmlFor="Nike Dunk">Nike Dunk</label>
                        </div>
                        <div onClick={filtrarJordan}>
                            <input type="radio" name="tipo" id="Jordan" value='Jordan' />
                            <label htmlFor="Jordan">Jordan</label>
                        </div>
                        <div onClick={filtrarAirForce}>
                            <input type="radio" name="tipo" id="Air Force" value='Air Force' />
                            <label htmlFor="Air Force">Air Force</label>
                        </div>
                    </div>
                    <div action="filtrarPorPrecio" className="formFiltrarPorPrecio" name="form">
                        <div className="tituloFiltro">Precio:</div>
                        <div className="filtro">
                            <input type="number" name="precio" id="precio" placeholder="Ingrese precio maximo..." />
                            <div className="btn" onClick={filtrarPorPrecio}>Filtrar</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="zapas">
                {
                    dataFiltrada.length == 0 ? <h4>No existen resultados</h4> : dataFiltrada.map((product) => (
                        <Link to={`/sneakers/details/${product.id}`} key={product.id} style={{ textDecoration:'none'}}>
                            <Item id={product.id} articulo={product.articulo} precio={product.precio} img={product.imgs.img1} imgs={product.imgs} size={product.size} tipo={product.tipo}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList