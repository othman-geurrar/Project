/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tQa9MLCH6Gl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export default function Component() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 border-b">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link
          className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Home
        </Link>
        <Link
          className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Products
        </Link>
        <Link
          className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          About
        </Link>
        <Link
          className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="hidden md:inline-flex" variant="outline">
          Sign In
        </Button>
        <Button className="rounded-full" size="icon" variant="ghost">
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full md:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="md:hidden" side="left">
            <div className="grid gap-2 py-6">
              <Link
                className="relative flex w-full items-center py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Home
              </Link>
              <Link
                className="relative flex w-full items-center py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Products
              </Link>
              <Link
                className="relative flex w-full items-center py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                About
              </Link>
              <Link
                className="relative flex w-full items-center py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}