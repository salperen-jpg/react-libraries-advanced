import { useParams } from 'react-router-dom';
import data from '../data';
import { Link } from 'react-router-dom';
const SingleProduct = () => {
  const { id } = useParams();

  const product = data.find((product) => product.id === id);
  return (
    <section className='section product'>
      <h2>{id} </h2>
      <img src={product.image} alt='' />
      <Link to='/products' className='btn'>
        Go to products
      </Link>
    </section>
  );
};

export default SingleProduct;
