import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Components</a>
              <ul className="p-2">
                <li>
                  <Link href={"/featuredproduct?category=Cpu"}>
                    CPU / Processor
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Motherboard"}>
                    Motherboard
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Ram"}> Ram</Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Power"}>
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Storage"}>
                    Storage Device
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Monitor"}>
                    {" "}
                    Monitor
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Mouse"}> Others</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          TechPlaza
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-dropdown-show  px-1">
          <li tabIndex={0}>
            <details>
              <summary className="font-semibold text-lg">Components</summary>
              <ul className="p-2">
                <li>
                  <Link href={"/featuredproduct?category=Cpu"}>
                    CPU / Processor
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Motherboard"}>
                    Motherboard
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Ram"}> Ram</Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Power"}>
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Storage"}>
                    Storage Device
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Monitor"}>
                    {" "}
                    Monitor
                  </Link>
                </li>
                <li>
                  <Link href={"/featuredproduct?category=Mouse"}>Others</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session?.user ? (
          <>
            <Link
              href={""}
              className="btn bg-gradient-to-t from-purple-800 to-blue-300 text-white font-bold shadow-lg"
              onClick={() => signOut()}
            >
              Logout
            </Link>
            <Link
              href={"/pcbuild"}
              className="btn bg-gradient-to-t from-purple-800 to-blue-300 text-white font-bold shadow-lg"
            >
              PC Builder
            </Link>
          </>
        ) : (
          <Link
            href={"/login"}
            className="btn bg-gradient-to-t from-purple-800 to-blue-300 text-white font-bold shadow-lg"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
