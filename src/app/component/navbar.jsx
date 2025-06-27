// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="text-center bg-gradient-to-r from-pink-500 via-pink-400/10 to-pink-500
      backdrop-blur-md border-b border-white/20 flex items-center shadow-sm text-sm justify-between
">
       <Link href="/">
        <Image
          src="/haed.png" // ✅ รูปโลโก้
          alt="Logo"
          width={60}
          height={60}
          className="mr-3"
        />
      </Link>

      <button className="text-white focus:outline-none ">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}