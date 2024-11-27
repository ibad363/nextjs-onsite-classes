import CarCard from "./CarCard"

const FeatureCar = () => {
    const carDetails = [
        { carName: "Toyota Corolla", carPrice : "59.7 - 75.5", reviews: 621 , imagePath: "/assets/car1.jpg"},
        { carName: "Suzuki Alto", carPrice : "23.3 - 30.5", reviews: 199, imagePath: "/assets/car2.png"},
        { carName: "Honda City", carPrice : "46.5 - 58.5", reviews: 456, imagePath: "/assets/car3.jpg"},
        { carName: "Honda Civic", carPrice : "86.6 - 99.0", reviews: 359, imagePath: "/assets/car4.jpg"},
    ]
  return (
    <div>
        <div className="flex gap-4 flex-wrap justify-center">
            {
                carDetails.map((car) => {
                    return (
                        <CarCard carName={car.carName} carPrice={car.carPrice} reviews={car.reviews} imagePath={car.imagePath} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default FeatureCar