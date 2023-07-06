// HIGHLIGHTING ACTIVE PAGE ON NAVBAR
// Get sections and tags for the nav bar to check their classes
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlights active page on navbar on scroll
window.onscroll = () => {
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

// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (scrollY >= (sectionTop - sectionHeight / 3)) {
//             current = section.getAttribute('id');
//         }
//     })

//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.classList.contains(current)) {
//             link.classList.add('active');
//         }
//     });
// })