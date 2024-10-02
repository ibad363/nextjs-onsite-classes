import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <ul className=" flex-wrap flex gap-3 underline justify-center bg-cyan-500 max-w-screen mx-auto py-6 px-4 md:px-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/students">Students</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/services/webdev">Web Development</Link></li>
                <li><Link href="/services/appdev">App Development</Link></li>
                <li><Link href="/services/ai">Artificial Intelligence</Link></li>
            </ul>
        </div>
    )
}