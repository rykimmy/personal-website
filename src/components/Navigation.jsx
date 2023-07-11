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

    // HEADER CHANGE
    //
    // 0 - 400: Navbar
    // 400 - 800: No navbar
    // 800 onwards: Different Navbar
    //
    // let navbar = document.querySelector('header');
    // window.onscroll = () => {
    //     if (window.scrollY <= 200) {
    //         navbar.classList.add('heading');
    //         navbar.classList.remove('header-active');
    //     } else if (window.scrollY > 200 && window.scrollY <= 800) {
    //         navbar.classList.remove('heading');
    //         navbar.classList.remove('header-active');
    //     } else if (window.scrollY > 800) {
    //         navbar.classList.add('heading');
    //         navbar.classList.add('header-active');
    //     };
    // };

    // ACTIVE NAV: METHOD 1
    // window.addEventListener('scroll', () => {
    //   let current = '';
    //   sections.forEach(section => {
    //     const sectionTop = section.offsetTop;
    //     const sectionHeight = section.clientHeight;
    //     if (scrollY >= (sectionTop - sectionHeight / 3)) {
    //       current = section.getAttribute('id');
    //     }
    //   })

    //   navLinks.forEach(link => {
    //     link.classList.remove('active');
    //     if (link.classList.contains(current)) {
    //       link.classList.add('active');
    //     }
    //   });
    // })

    // ACTIVE NAV: METHOD 2
    // let sections = document.querySelectorAll('section');
    // let navLinks = document.querySelectorAll('a');
    // window.onscroll = () => {
    //   sections.forEach(sec => {
    //     let top = window.scrollY;
    //     let offset = sec.offsetTop - 200;
    //     let height = sec.offsetHeight;
    //     let id = sec.getAttribute('id');

    //     if (top >= offset && top < offset + height) {
    //       navLinks.forEach(links => {
    //         links.classList.remove('active');
    //         document.querySelector('a[href*=' + id + ']').classList.add('active');
    //       });
    //     };
    //   });
    // };

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