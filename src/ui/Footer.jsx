import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="p-8 bg-green-600 mt-14">
        <div className="flex flex-col md:justify-around md:flex-row md:items-center">
            <span className="text-white font-extrabold text-4xl md:text-6xl text-center font-mono"><Link to='/'>FITNESS APP</Link></span>
            <ul className="flex flex-col items-center my-6 text-white md:text-xl font-semibold underline">
                <li><Link to='/'>Home Page</Link></li>
                <li className="my-3"><Link to='/routine'>Routine Page</Link></li>
                <li><Link to='/favorite'>Favorites Page</Link></li>
            </ul>
        </div>
    </footer>
  )
}
