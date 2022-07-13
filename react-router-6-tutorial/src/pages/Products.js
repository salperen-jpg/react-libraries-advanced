import data from '../data';
import { Link } from 'react-router-dom';
const Products = () => {
  return (
    <>
      <section className='products'>
        {data.map((pro) => {
          return (
            <Link key={pro.id} to={`/products/${pro.id}`}>
              <article>
                <img src={pro.image} alt='' />
                <h4>{pro.name}</h4>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Products;
