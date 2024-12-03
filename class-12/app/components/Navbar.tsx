const Navbar = () => {
  return (
    <div className="bg-slate-500/80 p-4">
        <nav className='flex justify-between items-center'>
            <div className='text-lg'>Logo</div>
            <ul className="flex gap-4 text-lg">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Gallery</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar