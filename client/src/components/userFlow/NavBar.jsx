import React from 'react'
import { Button, Drawer, IconButton, useMediaQuery, useTheme, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';
// import MenuIcon from '@mui/icons-material/Menu'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function NavBaar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  return (
    <header className="flex h-18 w-full items-center justify-between px-4 md:px-6 border-b">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2" href="#">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <div className="w-20 rounded-full">
            <img src={logo} alt="Logo" />
          </div>
          <span className="text-lg font-semibold text-teal-500">Our Styles Are Yours</span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
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
        {!isLargeScreen && (
          <IconButton className="rounded-full md:hidden" size="large" onClick={toggleDrawer(true)}>
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </IconButton>
        )}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{
            style: {
              width: '100%',
            },
          }}>
            <Box display="flex" justifyContent="flex-end" p={2}>
              <IconButton onClick={toggleDrawer(false)}>
                 <CloseIcon />
              </IconButton>
            </Box>

        <div className="grid gap-2 py-6">
              <Link
                className="relative flex px-4 w-full items-center py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Home
              </Link>
              <Link
                className="relative flex px-4 w-full items-center py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Products
              </Link>
              <Link
                className="relative flex px-4 w-full items-center py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                About
              </Link>
              <Link
                className="relative flex px-4 w-full items-center py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </div>
        </Drawer>
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
