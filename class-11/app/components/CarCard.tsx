const CarCard = (props:any) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-600 pt-1 pb-4">
        <div><img src={props.imagePath} alt="Car Image" className="w-[250px]"/></div>
        <h3 className="text-blue-900 font-bold mb-2">{props.carName}</h3>
        <h3 className="text-green-600 mb-4">PKR {props.carPrice} lacs</h3>
        <p><span className="text-orange-500">★★★☆☆</span> {props.reviews} Reviews</p>
    </div>
  )
}

export default CarCard