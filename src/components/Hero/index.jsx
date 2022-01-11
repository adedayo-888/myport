import './Hero.css';

const Hero = () => {
  return (
    <div className='herosec'>
      <div className='herosec-wrapper'>
        <h2 className='hero-intro'>
          Hello,
          <br /> My name is Ade. Adeniji
        </h2>

        <div className='desc-box'>
          <h3 className='hero-desc'>
            Web Developer, Content Creator, Ui/Ux Designer.
          </h3>
        </div>
        <button className='btn'>More Info</button>
      </div>
    </div>
  );
};

export default Hero;
