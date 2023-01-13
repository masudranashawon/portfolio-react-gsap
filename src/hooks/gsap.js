import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { BsTranslate } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export const useLinkDownFall = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useLineForward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        width: 0,
      },
      {
        width: "100%",
        stagger: 0.2,
        duration: 1.5,
        delay: 1.2,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useTextUpward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};

export const useBoxScaling = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        delay: 2,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};

export const useProjectTitlesSpan = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    const trigElm = trig.current;

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trigElm,
          start: "top center",
        },
      }
    );
  }, [arr, trig]);
};

export const useProjectsLines = (arr, trig) => {
  useEffect(() => {
    const el = arr;
    const trigElm = trig.current;

    gsap.fromTo(
      el,
      {
        width: 0,
      },
      {
        width: "100%",
        stagger: 0.2,
        duration: 1.5,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trigElm,
          start: "top center",
        },
      }
    );
  }, [arr, trig]);
};

export const useProjectsTexts = (arr, trig, delay = 0.5) => {
  useEffect(() => {
    const el = arr;
    const trigElm = trig.current;

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: trigElm,
          start: "top center",
        },
      }
    );
  }, [arr, trig, delay]);
};

export const useProjectsNumbers = (arr, trig) => {
  useEffect(() => {
    const el = arr;
    const trigElm = trig.current;

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        delay: 1,
        scrollTrigger: {
          trigger: trigElm,
          start: "top center",
        },
      }
    );
  }, [arr, trig]);
};

export const useErrorDownfall = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        delay: 2,
        stagger: 0.2,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const usePageNotFound = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: "100vw",
        transform: "rotate(80deg)",
      },
      {
        x: 0,
        transform: "rotate(0deg)",
        duration: 1,
        stagger: 0.1,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGoHomeUpward = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 0.5,
        delay: 2.8,
        ease: "power4.out",
      }
    );
  }, [item]);
};
