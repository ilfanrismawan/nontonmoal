"use client";
// import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import useAuth from "../hooks/useAuth";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  // const { logout } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled &&
        "h-[70px] rounded-sm bg-[#14141469] backdrop-blur-sm transition duration-200 ease-out "
      }`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* <img
          src="https://rb.gy/ulxxee"
          alt="Netflix Logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        /> */}
        <h1
          className="cursor-pointer text-2xl text-red-500"
          onClick={() => router.push("/")}
        >
          NontonMoal✨
        </h1>

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">Trending Now</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <BsSearch className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BsBell className="h-6 w-6" />
        {/* <Link href="/account"> */}
        <img
          // onClick={logout}

          src="https://rb.gy/g1pwyx"
          alt="Profile Picture"
          className="cursor-painter rounded"
        />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default NavBar;
