import Link from "next/link"

export default function Navbar(){
    return(
        <div>
            <ul className="flex gap-3 bg-orange-400">
                <li><Link href="/">Home</Link></li>
                <li><Link className="underline" href="/about">About</Link></li>
                <li><Link className="underline" href="/contact">Contact</Link></li>
                <li><Link className="underline" href="/gallery">Gallery</Link></li>
            </ul>
        </div>
    )
}