import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Logo: React.FC = () => {
  return (
    <Link
      to={'/'}
      className='w-10 h-10 flex items-center lg:h-16 lg:w-16'
    >
      <img
        src={logo}
        alt='logo'
        className='hidden md:block'
      />
      <h1 className='text-white ml-0 text-md lg:text-xl md:ml-4'>
        PixelMarket
      </h1>
    </Link>
  )
}

export default Logo
