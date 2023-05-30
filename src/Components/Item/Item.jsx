import './Item.css'

// eslint-disable-next-line react/prop-types
const Item = ({ id, articulo, img, precio }) => {
    return (
        <div className="cardItem" key={id} role="button" style={{ backgroundImage: `url(${img})` }}>
            <div className="opacida">
                <div className="card-body">
                    <h5>{articulo}</h5>
                    <p>uS${precio}</p>
                </div>
            </div>
            <div className='btnDetalles'>Ver mas</div>
        </div>
    )
}

export default Item;

{/* <div className="cardItem" key={id} role="button" style={{ backgroundImage: `url(${img})` }}></div> */}