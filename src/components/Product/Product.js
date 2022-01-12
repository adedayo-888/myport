import './Product.css';

const Product = ({ img, link, text }) => {
  return (
    <>
      <div className='p'>
        <div className='p-browser'>
          <div className='p-circle'></div>
          <div className='p-circle'></div>
          <div className='p-circle'></div>
        </div>
        <div
          style={{ alignItem: 'center', padding: '15px', fontSize: '1.6rem' }}>
          {text}
        </div>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={img} alt='' className='p-img' />
        </a>
      </div>
    </>
  );
};

export default Product;
