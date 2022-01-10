import './Header.scss';
import AiOutlineMail from 'react-icons/ai';
import IoPerson from 'react-icons/io';
import CgMenuRight from 'react-icons/cg';

// FaArtstation  CgMenuRight IoPerson;

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            A.ADENIJ'S PORTFOLIO
          </a>
          <div className='itemContainer'>
            <IoPerson className='icon' />
            <span>+44 924 12 74</span>
          </div>
          <div className='itemContainer'>
            <AiOutlineMail className='icon' />
            <span>ade@yahoo.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <CgMenuRight />
          </div>
        </div>
      </div>
    </div>
  );
}
