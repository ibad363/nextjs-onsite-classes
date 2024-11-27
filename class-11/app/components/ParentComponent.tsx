import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    let favColor = "Blue"
    let favDish = "Biryani"
  return (
    <div>
        <ChildComponent color={favColor} dish={favDish}/>
        <ChildComponent color={"Green"} dish={"Karahi"}/>
    </div>
  )
}

export default ParentComponent