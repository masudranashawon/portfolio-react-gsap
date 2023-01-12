import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className='header container'>
      <div className='row'>
        <h2>
          M<span>a</span>sud <span>R</span>ana
        </h2>
        <h2>
          Sh<span>aw</span>on
        </h2>
      </div>

      <hr />

      <div className='row'>
        <span>Front-end Developer</span>
        <a
          href='https://drive.google.com/file/d/17_dRoIcLRcY8SKyEWYmbYkX595rVDFpo/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          View Resume
        </a>
        <a
          href='mailto:mohammadmasudrana3396@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          Send Email
        </a>
        <Link to='/contact'>Contact</Link>
      </div>

      <hr />

      <div className='row'>
        <Link to='/about' className='box about'>
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>Aspiring</h2>
        <Link to='/projects' className='box projects'>
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr />

      <div className='row'>
        <h2>
          Fro<span>n</span>tend Dev<span>el</span>oper
        </h2>
      </div>

      <hr />

      <div className='row'>
        <h2>Based</h2>
        <Link to='/skills' className='box skills'>
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>in Bangladesh</h2>
      </div>

      <hr />
    </div>
  );
};

export default Header;
