import NavLeft from "@/components/molekul/navbar/nav-left";
import NavRight from "@/components/molekul/navbar/nav-right";

export default function Navbar() {
  return (
    <nav className="px-36 py-6 flex justify-between items-center bg-white-s">
        <NavLeft/>
        <NavRight />
    </nav>
  )
}
