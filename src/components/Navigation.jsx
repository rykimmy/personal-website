function Navigation() {

    // NAV BUTTONS
    const navigation = [
        {
            name: 'about',
        },
        {
            name: 'education',
        },
        {
            name: 'experience',
        },
        {
            name: 'projects',
        },
        {
            name: 'activities',
        }
    ]

    // On scrolling changes, heading/navbar css
    /*
    0 - 400: Navbar
    400 - 800: No navbar
    800 onwards: Different Navbar
    */
    const navbar = document.querySelector('header');
    window.onscroll = () => {
        if (window.scrollY <= 200) {
            navbar.classList.add('heading');
            navbar.classList.remove('header-active');
        } else if (window.scrollY > 200 && window.scrollY <= 800) {
            navbar.classList.remove('heading');
            navbar.classList.remove('header-active');
        } else if (window.scrollY > 800) {
            navbar.classList.add('heading');
            navbar.classList.add('header-active');
        };
    };

    return (
        <div>
            <header>
                <nav>
                    <a href="#home" className='active'>Home</a>
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#activities ">Activities</a>
                </nav>

                {/* <nav>
                    <div class="container">
                        <ul>
                            <li class="home active"><a href="#home">Home</a></li>
                            <li class="about"><a href="#about">About</a></li>
                            <li class="education"><a href="#education">Education</a></li>
                            <li class="experience"><a href="#experience">Experience</a></li>
                            <li class="projects"><a href="#projects">Projects</a></li>
                            <li class="Activities"><a href="#activities">Activities</a></li>
                        </ul>
                    </div>
                </nav> */}
            </header>
        </div>
    )
}

export default Navigation;