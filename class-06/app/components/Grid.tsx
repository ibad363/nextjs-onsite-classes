export default function Grid() {
  return (
      <div>
          <div className="grid grid-cols-4 grid-rows-3 gap-4 m-4 mx-12 mt-8 h-[80vh]">
            <div className="row-span-3 bg-green-500"></div>
            <div className="col-span-2 bg-green-500"></div>
            <div className="bg-red-600"></div>
            <div className="bg-yellow-500"></div>
            <div className="bg-red-600"></div>
            <div className="row-span-2 bg-green-500"></div>
            <div className="bg-red-600"></div>
            <div className="bg-yellow-500"></div>
          </div>
      </div>
  )
}