
const RecommendCard = ({title, image, details}) => {
    return (
          <div className="card hover:scale-105 transition-transform duration-300 ease-in-out  bg-base-100  shadow-xl">
  <figure className="">
    <img
      src={image}
      alt="Shoes"
      className="" />
  </figure>
  <div className="card-body  items-center text-center">
    <h2 className="card-title text-2xl">{title}</h2>
    <p>{details}</p>
    <div className="card-actions">
      <button className="btn border-0 uppercase hover:bg-green-500 hover:text-white text-yellow-600 btn-outline border-b-4">add to cart</button>
    </div>
  </div>
</div>

    );
};

export default RecommendCard;