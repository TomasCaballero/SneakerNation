import './footer.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Footer = () => {

    const MySwal = withReactContent(Swal)
    const formEnviado =()=>{
        const inputNombre = document.getElementById('inputNombre')
        const inputApellido = document.getElementById('inputApellido')
        const inputCorreo = document.getElementById('inputCorreo')
        const textarea = document.getElementById('textarea')
        if(inputNombre.value == '' || inputApellido.value == '' || inputCorreo.value == '' || textarea.value == ''){
            MySwal.fire({
                icon: 'error',
                title: 'Debe completar todos los campos'
            })
        }else{
            MySwal.fire({
                icon: 'success',
                title: 'Consulta enviada',
                text: 'En breve recibira una respuesta'
            })
        }
    }
    return (
        <div className="footer">
            <h5 className='titulo'>SneakerNation</h5>
            <div className="contFooter">
                <div className="formContainer">
                    <p className="tituloForm">
                        No dude en contactarnos:
                    </p>
                    <form className='form' action="" onSubmit={(e)=>{e.preventDefault()}}>
                        <input type="text" name="" id="inputNombre" placeholder='Nombre/s'/>
                        <input type="text" name="" id="inputApellido" placeholder='Apellido/s'/>
                        <input type="email" name="" id="inputCorreo" placeholder='Correo'/>
                        <textarea name="" id="textarea" cols="30" rows="10" placeholder='Su consulta'></textarea>
                        <input type="submit" value="Enviar" className='btnForm' onClick={formEnviado}/>
                    </form>
                </div>
                <div className="redes">
                    <p className='tituloRedes'>Nuestras redes:</p>
                    <div className="redesContainer">
                        <div className="red">
                            <box-icon name='instagram' type='logo' animation='tada' color='#ffffff' ></box-icon>
                            <p>SneakerNation</p>
                        </div>
                        <div className="red">
                            <box-icon name='tiktok' type='logo' animation='tada' color='#ffffff' ></box-icon>
                            <p>SneakerNation</p>
                        </div>
                        <div className="red">
                            <box-icon name='twitter' type='logo' animation='tada' color='#ffffff' ></box-icon>
                            <p>SneakerNationTW</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer