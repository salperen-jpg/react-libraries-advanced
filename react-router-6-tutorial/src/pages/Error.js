import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <section className='section'>
      <h2>Error</h2>
      <p>No page found</p>
      <Link to='/' className='btn'>
        Go home
      </Link>
    </section>
  );
};
export default Error;
