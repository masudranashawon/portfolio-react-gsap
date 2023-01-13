import { useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  useLineForward,
  useLinkDownFall,
  useTextUpward,
  useBoxScaling,
} from "../hooks/gsap";

const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);

  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const text4 = useRef();
  const text5 = useRef();
  const text6 = useRef();

  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  const linkArr = [link1, link2, link3, link4];
  const lineArr = [line1, line2, line3, line4];
  const textArr = [text1, text2, text3, text4, text5, text6];
  const boxArr = [box1, box2, box3];

  useLinkDownFall(linkArr);
  useLineForward(lineArr);
  useTextUpward(textArr);
  useBoxScaling(boxArr);

  return (
    <div className='header container'>
      <div className='row'>
        <h2 ref={text1}>
          M<span>a</span>sud Ra<span>n</span>a
        </h2>
        <h2 ref={text2}>
          Sh<span>aw</span>on
        </h2>
      </div>

      <hr ref={line1} />

      <div className='row'>
        <span ref={link1}>Front-end Developer</span>
        <a
          ref={link2}
          href='https://drive.google.com/file/d/17_dRoIcLRcY8SKyEWYmbYkX595rVDFpo/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          View Resume
        </a>
        <a
          ref={link3}
          href='mailto:mohammadmasudrana3396@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          Send Email
        </a>
        <Link ref={link4} to='/contact'>
          Contact
        </Link>
      </div>

      <div className='row'>
        <Link ref={box1} to='/about' className='box about'>
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={text3}>Aspiring</h2>
        <Link ref={box2} to='/projects' className='box projects'>
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr ref={line2} />

      <div className='row'>
        <h2 ref={text4}>
          Front-E<span>n</span>d Dev<span>el</span>oper
        </h2>
      </div>

      <hr ref={line3} />

      <div className='row'>
        <h2 ref={text5}>Based</h2>
        <Link ref={box3} to='/skills' className='box skills'>
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={text6}>in Bangladesh</h2>
      </div>

      <hr ref={line4} />
    </div>
  );
};

export default Header;
