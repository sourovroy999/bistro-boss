
const FoodCards = ({item}) => {

       const{name, recipe, image, price} = item



    return (
      <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={image}
      alt={name} />
  </figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 px-4 rounded-2xl py-2 mt-4">$ {price}</p>
  <div className="card-body text-center">
    <h2 className="card-title justify-center ">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary mt-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCards;