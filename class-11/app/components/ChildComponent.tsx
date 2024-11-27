const ChildComponent = (props:any) => {
  return (
    <div className="border-2 border-gray-600 mb-5 p-2">
        <h1 className="text-lg sm:text-xl md:text-4xl mb-2">My Favorite Color is {props.color}</h1>
        <h1 className="text-lg sm:text-xl md:text-4xl">My Favorite Dish is {props.dish}</h1>
    </div>
  )
}

export default ChildComponent