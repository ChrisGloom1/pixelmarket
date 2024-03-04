import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Logo: React.FC = () => {
  return (
    <Link
      to={'/'}
      className='w-16 h-16 flex items-center'
    >
      <img
        src={logo}
        alt='logo'
        className='hidden md:block'
      />
      <h1 className='text-white ml-4 text-md md:text-xl'>PixelMarket</h1>
    </Link>
  )
}

export default Logo
