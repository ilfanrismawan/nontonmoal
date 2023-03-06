"use client";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "@headlessui/react";

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
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
          <li
            className="headerLink cursor-pointer hover:text-white/80 active:text-white/70"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li
            className="headerLink cursor-pointer hover:text-white/80 active:text-white/70"
            onClick={() => router.push("/tv-shows")}
          >
            TV Shows
          </li>
          <li
            className="headerLink cursor-pointer hover:text-white/80 active:text-white/70"
            onClick={() => router.push("/movies")}
          >
            Movies
          </li>
          <li
            className="headerLink cursor-pointer hover:text-white/80 active:text-white/70"
            onClick={() => router.push("/trending")}
          >
            Trending Now
          </li>
          <li
            className="headerLink cursor-pointer hover:text-white/80 active:text-white/70"
            onClick={() => router.push("/my-list")}
          >
            My List
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <BsSearch className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BsBell className="h-6 w-6" />
        <Menu>
          <Menu.Button>
            <img
              // onClick={logout}

              src="https://rb.gy/g1pwyx"
              alt="Profile Picture"
              className="cursor-painter rounded"
            />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <div className="mr-2 h-5 w-5" aria-hidden="true"></div>
                    ) : (
                      <div className="mr-2 h-5 w-5" aria-hidden="true"></div>
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
            </div>
            <Menu.Item disabled>
              <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
}

export default NavigationBar;
