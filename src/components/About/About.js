import './About.css';
import Award from '../../images/dayo.JPG';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Award} alt='pic' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <div className='a-box'>
          <p className='a-sub'>
            I am a Self-Taught Web Developer available for hire to create
            stylish,responsive websites,web services and online stores with
            modern web technologies.
          </p>
          <p className='a-desc'>
            I'm skilled in HTML5, CSS3, Javascript, ReactJs, NextJs,Material-Ui,
            Styled-Components which i utilize to design the frontend of websites
          </p>
          <p className='a-desc'>
            For the Backend of Web Apps I specialize in NodeJs, Express,
            Firebase and MongoDb .
          </p>
          <p className='a-desc'>
            I am passionate about coding and willing to continue learning new
            technologies for the purpose of producing responsive web apps
          </p>
        </div>
        <div className='a-award'>
          <img src={Award} alt='' className='a-award-img' />
          <div className='a-award-texts'>
            <h4 className='a-award-title'>International Design Awards 2021</h4>
            <p className='a-award-desc'>
              Always Striving For The Best Possible Results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
