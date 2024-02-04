import Logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-10">
        <img src={Logo} alt="syndicate logo" className="w-52 md:w-96" />
    </nav>
  )
}

export default Navbar
