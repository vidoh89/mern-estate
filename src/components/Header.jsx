import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='bg-stone-800 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
      <h1 className='font-bold text-sm: text-xl flex flex-wrap'>
        <span className="text-green-300 ">Dority</span>
        <span className="text-stone-200" >Estate</span>
      </h1>
      </Link>
      <form className='flex items-center bg-slate-100 p-3 rounded-md shadow-sm shadow-gray-500 '>
        <input type="text" placeholder="Search..." 
        className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-green-200'/>
      </form>
      <ul className='flex gap-4 '>
        <Link to='/'>
        <li className='hidden sm:inline hover:text-xl  text-stone-200'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline hover:text-xl text-stone-200'>About</li>
        </Link>
        <Link to='/signin'>
        <li className='hover:text-xl text-green-300'>Sign in</li>
      </Link>
      </ul>

    </div>
    </header>
  )
}

export default Header
