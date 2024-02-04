import Logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-10 w-full">
        <img src={Logo} alt="syndicate logo" className="w-52 height-based-width md:w-96" />
    </nav>
  )
}

export default Navbar
