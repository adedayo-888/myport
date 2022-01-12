import './ProductList.css';
import Product from '../Product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>My Work</h1>
        <p className='pl-desc'>
          A showcase of my ability to use Programming Code and Mordern
          Technologies to produce responsive web apps.
        </p>
      </div>
      <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
