import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
 export default function Projects() {
    return (
      <main>
        <div className="project-container">
          <div className="project1-img">
            <img src={project1} className="project-img" alt="Cyber Punk" /> 
          </div>
          <div className="project1-text">
          <p className='cybertext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
          </div>
          
        </div>
        <div className="project-container">
          <div className="project1-img">
            <img src={project2} className="project-img" alt="Cyber Punk" /> 
          </div>
          <div className="project1-text">
          <p className='cybertext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
          </div>
          
        </div>
      </main>
    );
  }