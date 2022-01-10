import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Web Developer', 'Content Creator', ' Interface Designer'],
    });
  }, []);

  return (
    <div className='intros' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='images/dayo-02.jpg' alt='me' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Ade. Adeniji</h1>
          <h3>
            A Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='images/down.png' alt='' />
        </a>
      </div>
    </div>
  );
}
