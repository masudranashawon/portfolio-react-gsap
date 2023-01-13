import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  useErrorDownfall,
  usePageNotFound,
  useGoHomeUpward,
} from "../hooks/gsap";

const NotFound = () => {
  const errorRef1 = useRef(null);
  const errorRef2 = useRef(null);
  const errorRef3 = useRef(null);

  const notFound1 = useRef(null);
  const notFound2 = useRef(null);
  const notFound3 = useRef(null);
  const notFound4 = useRef(null);
  const notFound5 = useRef(null);
  const notFound6 = useRef(null);
  const notFound7 = useRef(null);
  const notFound8 = useRef(null);
  const notFound9 = useRef(null);
  const notFound10 = useRef(null);
  const notFound11 = useRef(null);
  const notFound12 = useRef(null);
  const notFound13 = useRef(null);

  const notFoundRef = useRef(null);

  const goHomeRef = useRef(null);

  const errorArr = [errorRef1, errorRef2, errorRef3];
  const notFoundArr = [
    notFound1,
    notFound2,
    notFound3,
    notFound4,
    notFound5,
    notFound6,
    notFound7,
    notFound8,
    notFound9,
    notFound10,
    notFound11,
    notFound12,
    notFound13,
  ];

  useErrorDownfall(errorArr);
  usePageNotFound(notFoundArr);
  useGoHomeUpward(goHomeRef);

  return (
    <div className='not-found-section'>
      <h2 className='error'>
        <span ref={errorRef1}>4</span>
        <span ref={errorRef2}>0</span>
        <span ref={errorRef3}>4</span>
      </h2>
      <p className='not-found' ref={notFoundRef}>
        <span className='word-space'>
          <span ref={notFound1}>P</span>
          <span ref={notFound2}>a</span>
          <span ref={notFound3}>g</span>
          <span ref={notFound4}>e</span>
        </span>
        <span className='word-space'>
          <span ref={notFound5}>n</span>
          <span ref={notFound6}>o</span>
          <span ref={notFound7}>t</span>
        </span>
        <span ref={notFound8}>f</span>
        <span ref={notFound9}>o</span>
        <span ref={notFound10}>u</span>
        <span ref={notFound11}>n</span>
        <span ref={notFound12}>d</span>
        <span ref={notFound13}>!</span>
      </p>
      <span>
        <Link ref={goHomeRef} to='/' className='go-home-link'>
          Go home
        </Link>
      </span>
    </div>
  );
};

export default NotFound;
