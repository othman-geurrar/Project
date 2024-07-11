
import { Link } from "@mui/material";
import img from '../../assets/img/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400  py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-24">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            {/* <MountainIcon className="h-8 w-8 text-white" /> */}
            <img src={img} className="w-20 rounded-full text-white" />
            <span className="text-xl font-bold text-teal-500">Our Style Are Your</span>
          </div>
          <p className="text-sm">
                        Welcome to OSAY, your lifestyle hub for personalized
                        expression. Dive into our curated selections designed to
                        complement your individual tastes and interests. From
                        fashion to wellness to adventure, find everything you
                        need to enhance your lifestyle. Explore expertly crafted
                        content that inspires and informs. Embrace your unique
                        journey with confidence, only at OSAY.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3 mt-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link underline="none" color="gray-400" className="hover:text-gray-300 " href="/">
                 Home
                </Link>
              </li>
              <li>
                <Link underline="none" color="gray-400" className="hover:text-gray-300" href="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link underline="none" color="gray-400" className="hover:text-gray-300" href="/lifestyles">
                  Lifestyles
                </Link>
              </li>
              <li>
                <Link underline="none" color="gray-400" className="hover:text-gray-300" href="/events">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 mt-4">
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="space-y-2">
              
              <li>
                <Link underline="none" color="gray-400" className="hover:text-gray-300" href="#">
                  Contact
                </Link>
              </li>
              <li>
                <Link underline="none" color="gray-400" className="hover:text-gray-300" href="#">
                  Terms & FAQ
                </Link>
              </li>
              <li>
                <Link underline="none" color="gray-400" className="hover:text-gray-300" href="#">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          <h4 className="text-white font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <Link
              underline="none"
              className=" hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              href="#"
              color="gray-400"
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              className=" hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              href="#"
              underline="none"
              color="gray-400"
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              className=" hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              href="#"
              underline="none"
              color="gray-400"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              href="#"
              underline="none"
              color="gray-400"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}