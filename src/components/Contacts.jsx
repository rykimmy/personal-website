import ContactItems from './ContactItems';

const Contacts = () => {
    return (
        <footer>

            {/* Mapping through contact item components */}
            {ContactItems.map((item, index) => {
                return (
                    <div key={item.name}>
                        <a className="contacts" target="_blank" href={item.target}><img src={item.logo} className="contactImg" /></a>
                    </div>
                );
            })}
        </footer>
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