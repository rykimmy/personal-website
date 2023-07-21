import ExperienceItems from './ExperienceItems';
import dali from '../../dali.jpeg';


function Experience() {
    return (
        <div>
            <h2 className="sectionTitle">Experience</h2>
            <h3 className="sectionSubtitle">More of my credentials.</h3>

            <div className="experienceContainer">
                {/* Like this --> https://www.garysheng.com/ */}
                {ExperienceItems.map((item, index) => {
                    return (
                        <div>
                            <a href={item.link} target="_blank">
                                <div className="experienceItem">
                                    <div>
                                        <img className="experienceImg" src={item.img} />
                                    </div>

                                    <div className="experienceInfo">
                                        <h4 className="experienceTitle">{item.name}</h4>
                                        <h5 className="experiencePosition">{item.position}</h5>

                                        {item.description.map((description, ind) => {
                                            return (
                                                <p className="experienceDescription">{description}</p>
                                            )
                                        })}

                                        <div className="skills">
                                            {item.skills.map((skill, i) => {
                                                return (
                                                    <p className="skillItem">{skill}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {/* <a href="http://dali.dartmouth.edu/" target="_blank">
                    <div className="experienceItem">
                        <div>
                            <img className="experienceImg" src={dali} />
                        </div>

                        <div className="experienceInfo">
                            <h4 className="experienceTitle">DALI Lab</h4>
                            <h5 className="experiencePosition">Software Engineer • May 2023 – Present</h5>
                            <p className="experienceDescription">Selected through a competitive application process to join innovative startup like organization that solves problems brought by partners from around the world. Student teams simulate startup like environments and work on real projects brought to DALI by students, professors, entrepreneurs, non profits, corporate companies, and more.<br></br><br></br>As a developer, I collaborate with a project manager, designers, and other developers to create mobile and web applications, utilizing expertise in React and Firebase to deliver effective solutions to complex problems.</p>
                            <div className="skills">
                                <p className="skillItem">React</p>
                                <p className="skillItem">HTML</p>
                                <p className="skillItem">CSS</p>
                            </div>
                        </div>
                    </div>
                </a> */}
            </div>

        </div>
    )
}

export default Experience;