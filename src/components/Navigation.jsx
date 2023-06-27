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

    return (
        <div>
            <header>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#activities ">Activities</a>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;