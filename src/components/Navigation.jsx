function Navigation() {

    let navbar = document.querySelector('header');              // FOR CHANGING HEADER BACKGROUND
    let sections = document.querySelectorAll('section');        // FOR ACTIVE NAV
    let navLinks = document.querySelectorAll('header nav a');   // FOR ACTIVE NAV

    window.onscroll = () => {
        // Changes background color of navbar
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

        // Highlights active page on navbar on scroll
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 200;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
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
                    <a href="#activities">Activities</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;