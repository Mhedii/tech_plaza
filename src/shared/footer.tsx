import Link from "next/link";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className=" bg-base-200">
      <footer className="px-20 footer py-10 bg-base-200 text-base-content grid grid-cols-3">
        <div className="row-span-2">
          <div className="mb-4 ">
            <Link href="/" className="text-4xl text-fuchsia-700 font-semibold">
              TechPlaza
            </Link>
          </div>
          <span className="footer-title">Shop By</span>
          <Link href="" className="link link-hover">
            Ram
          </Link>
          <Link href="" className="link link-hover">
            Mother Board
          </Link>
          <Link href="" className="link link-hover">
            SSD
          </Link>
          <Link href="" className="link link-hover">
            Monitor
          </Link>
          <Link href="" className="link link-hover">
            Mouse
          </Link>
          <Link href="" className="link link-hover">
            Processor
          </Link>
          <Link href="" className="link link-hover">
            Intel Processor
          </Link>
        </div>
        <div className="">
          <span className="footer-title  ">Products</span>
          <Link href="" className="link link-hover">
            Others
          </Link>
          <Link href="" className="link link-hover">
            Build
          </Link>
          <Link href="" className="link link-hover">
            List
          </Link>
          <Link href="" className="link link-hover">
            reviews
          </Link>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <Link href="" className="link link-hover">
            Order Track
          </Link>
          <Link href="" className="link link-hover">
            Contact Us
          </Link>
          <Link href="" className="link link-hover">
            Find My Product
          </Link>
          <Link href="" className="link link-hover">
            FAQ
          </Link>
        </div>
        <div>
          <span className="footer-title">Get to know us</span>
          <Link href="" className="link link-hover">
            About Us
          </Link>
          <Link href="" className="link link-hover">
            Site Map
          </Link>
        </div>
        <div>
          <span className="footer-title">Terms of Use</span>
          <Link href="" className="link link-hover">
            Privacy Policy
          </Link>
          <Link href="" className="link link-hover">
            Happy Return
          </Link>
          <Link href="" className="link link-hover">
            Refund Policy
          </Link>
        </div>
        <div className="   grid grid-cols-1 md:place-self-center md:justify-self-end">
          <div>
            <p className="text-2xl font-medium ">Stay Connected</p>
          </div>
          <br />
          <div className="grid grid-flow-col text-2xl gap-4">
            <BsLinkedin className="hover:scale-110 hover:cursor-pointer" />
            <BsYoutube className="hover:scale-110 hover:cursor-pointer" />
            <BsFacebook className="hover:scale-110 hover:cursor-pointer" />
            <BsInstagram className="hover:scale-110 hover:cursor-pointer" />
            <BsTwitter className="hover:scale-110 hover:cursor-pointer" />
          </div>
        </div>
      </footer>
      <footer className=" px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <p className="text-center items-center justify-center">
          © {year} TechPlaza.com
        </p>
      </footer>
    </div>
  );
};

export default Footer;
