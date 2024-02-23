import BtnLink from "@/components/atom/navbar/btn-link";
import NavLink from "@/components/atom/navbar/nav-link";
import Link from "next/link";

export default function NavRight() {
  return (
    <div className="flex gap-5 items-center">
        <NavLink href="/login" >
          Login
        </NavLink>
        <BtnLink href="/register">
          Create Account
        </BtnLink>
    </div>
  )
}
