import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Parigoyal762004/CROWD_FUNDING"
          h3="Collect"
          p="web3 crowdfunding platform"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Parigoyal762004/devote"
          h3="Devote"
          p="Decentralized voting application"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Parigoyal762004/say"
          h3="youSay_iSee"
          p="Next.js Mystery message sending App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Parigoyal762004/appoint_doc"
          h3="Appoint_doc"
          p="Real time Doctor appointment  App"
        />
      </div>
    </section>
  );
}

export default Projects;