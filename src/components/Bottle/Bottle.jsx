import './Bottle.css';

const Bottle = ({bottle,handleAddToCart}) => {
    const {name,img,price} = bottle;
    return (
        <div className="bottle">
          <h3 className='font-bold'>Bottle : {name}</h3>  
          <img src={img} alt="" />
          <p>price: ${price}</p>
          <button onClick={() => handleAddToCart(bottle)} class="btn btn-neutral mt-4">purchase</button>
        </div>
    );
};

export default Bottle;