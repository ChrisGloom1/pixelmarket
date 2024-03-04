import Logo from '../Logo/Logo'
import Nav from './Nav'

const Header: React.FC = () => {
  return (
    <div className='bg-sky-950 sticky top-0 '>
      <div className='w-4/5 flex-wrap z-20 mx-auto flex items-center justify-between p-4'>
        <Logo />
        <Nav />
      </div>
    </div>
  )
}

export default Header
