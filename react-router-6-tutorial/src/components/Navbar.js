import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>Abou</Link>
      <Link to='/products'>Products</Link>
    </nav>
  );
};

export default Navbar;
