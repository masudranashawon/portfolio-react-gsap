import { useRef, useState } from "react";
import {
  useProjectTitlesSpan,
  useProjectsLines,
  useProjectsTexts,
  useProjectsNumbers,
} from "../hooks/gsap";

const data = [
  {
    id: 1,
    number: "01",
    title: "React Todo App",
    date: "Nov/22",
    tools: "React - Tailwind CSS",
  },
  {
    id: 2,
    number: "02",
    title: "Immemorial",
    date: "Nov/22",
    tools: "React - React Router - GSAP - CSS",
  },
  {
    id: 3,
    number: "03",
    title: "Foodverse",
    date: "Dec/22",
    tools: "React - React Router - Tailwind CSS",
  },
  {
    id: 4,
    number: "04",
    title: "Tech Alpha",
    date: "Jan/23",
    tools: "React - React Router - Redux - Tailwind CSS",
  },
];

const colors = ["#db4c44", "#32b8cb", "#00AD6F", "#8069ED"];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const projectsRef = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const lineRef = useRef([]);
  const textRef = useRef([]);
  const numberRef = useRef([]);
  const dateRef = useRef([]);
  const toolsRef = useRef([]);

  const titilesArr = [title1, title2];

  useProjectTitlesSpan(titilesArr, projectsRef);
  useProjectsLines(lineRef.current, projectsRef);
  useProjectsTexts(textRef.current, projectsRef);
  useProjectsTexts(dateRef.current, projectsRef, 1);
  useProjectsTexts(toolsRef.current, projectsRef, 1.5);
  useProjectsNumbers(numberRef.current, projectsRef);

  const projectsWrapperStyles = {
    backgroundColor: colors[currentProject],
  };

  const handleProjectColor = (index) => {
    setCurrentProject(index);
  };

  return (
    <div className='projects-section' ref={projectsRef}>
      <div className='titles'>
        <span ref={title1}>Selected works (2022 - 2023)</span>
        <span ref={title2}>Projects</span>
      </div>

      <div className='projects-list-wrapper' style={projectsWrapperStyles}>
        {data.map((project, i) => (
          <div className='project-wrapper' key={project.id}>
            <div
              className='project-item'
              onMouseOver={() => handleProjectColor(i)}
            >
              <div className='project-titles'>
                <span ref={(el) => (numberRef.current[i] = el)}>
                  {project.number}
                </span>
                <h2
                  className='single-title'
                  ref={(el) => (textRef.current[i] = el)}
                >
                  {project.title}
                </h2>
                <h2 className='multiple-title'>
                  {project.title} - {project.title} - {project.title}
                </h2>
              </div>
              <div className='project-details'>
                <span ref={(el) => (dateRef.current[i] = el)}>
                  {project.date}
                </span>
                <span ref={(el) => (toolsRef.current[i] = el)}>
                  {project.tools}
                </span>
              </div>
            </div>

            <hr ref={(el) => (lineRef.current[i] = el)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
