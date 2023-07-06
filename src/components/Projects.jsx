import ProjectItems from './ProjectItems'

function Projects() {
    return (
        <div>
            <h2 className="sectionTitle">Projects</h2>
            <h3 className="sectionSubtitle">Some of my creations.</h3>
            <div className="projectContainer">
                {ProjectItems.map((item, index) => {
                    return (
                        <div className="projectItem" key={item.project}>
                            {/* TITLE */}
                            <h4 className="projectTitle">{item.project}</h4>

                            {/* PROJECT INFO */}
                            <div className="languageDetails">
                                {item.languages.map((lan, index) => {
                                    return (
                                        <h5 className="projectLanguage">{lan.name}</h5>
                                    );
                                })}
                            </div>

                            {/* PROJECT DESCRIPTION */}
                            <p className="projectDescription">{item.description}</p>

                            {/* LINK */}
                            <div className="linkContainer">
                                {item.links.map((li, index) => {
                                    return (
                                        <p className="projectLink"><a className="github" target="_blank" href={li.link}>{li.name}</a></p>
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Projects