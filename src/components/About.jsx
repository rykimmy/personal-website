import profilepic from '../../me.jpg'
import AboutItems from './AboutItems'

function About() {

    return (
        <div>
            <section id="about">
                <h2 className="sectionTitle">About</h2>
                <h3 className="sectionSubtitle">Let me introduce myself.</h3>
                <div className="aboutContainer">
                    <img id="dp" src={profilepic} />
                    <p id="aboutText">Hi there! My name is Ryan Kim, and I am a rising third-year ('25) at Dartmouth College studying Computer Science and Human Centered Design. I am an aspiring software engineer and am currently pursuing an internship for the summer of 2024. I have displayed some of my content and information below. I hope you enjoy!</p>
                </div>
                <h3 id="subheader">Languages and Technologies</h3>
                <div className="languagesContainer">
                    {AboutItems.map((item, index) => {
                        return (
                            <div className="languageItem">
                                <img className="languageImg" src={item.logo} />
                                <h5 className="language">{item.language}</h5>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}

export default About;