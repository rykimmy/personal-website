import ContactItems from './ContactItems';
import resume from '../../icons/resume.png';

const Contacts = () => {
    return (
        <div>
            <h2 className="contactTitle">Contact</h2>
            <h3 className="sectionSubtitle">How to reach me.</h3>

            <div className="contactContainer">
                {ContactItems.map((item, index) => {
                    return (
                        <div key={item.name} className="contactItem">
                            <a className="contacts" target="_blank" href={item.target}><img src={item.logo} className="contactImg" /></a>
                            <h5 className="linkText">{item.text}</h5>
                        </div>
                    );
                })}

                {/* TO DOWNLOAD RESUME */}
                <div key="resume" className="contactItem">
                    <a className="contacts" target="_blank" href='./RyanKim_CV (07-22-23).pdf' download><img src={resume} className="contactImg" /></a>
                    <h5 className="linkText">my resume</h5>
                </div>
            </div>
        </div>
    );
};

//////////// OLD CODE WITHOUT USING COMPONENTS ////////////

// function Contacts() {
//     return (
//         <footer>
//             <a className="contacts" href="mailto:ryan.s.kim.25@dartmouth.edu"><img class="contactimg" src="emailicon.png" /></a>
//             <a className="contacts" target="_blank" href="https://github.com/rykimmy"><img class="contactimg" src="githubicon.png" /></a>
//             <a className="contacts" target="_blank" href="https://www.linkedin.com/in/ryan-kim-b013b81bb/"><img class="contactimg" src="linkedinicon.png" /></a>
//         </footer>
//     )
// }

export default Contacts;