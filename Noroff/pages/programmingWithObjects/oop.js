$(document).ready(function () {
    innsertLocalNav('/Noroff/pages/programmingWithObjects', localNavTitles);
});

const localNavTitles = [
    {
        button: 'OOP Intro', url: '/module1/index.html', subDomains: [
            { button: 'Introduction to Objects - Part 1', url: '/module1/modul1.html' },
            { button: 'Introduction to Objects - Part 2', url: '/module1/modul2.html' },
            { button: 'JSON - Part 1', url: '/module1/modul3.html' },
            { button: 'JSON  - part 2', url: '/module1/modul4.html' },
            { button: 'Self Study', url: '/module1/modul5.html' }
        ]
    },
    {
        button: 'OOP Design', url: '/module2/index.html', subDomains: [
            { button: 'Object-oriented design', url: '/module2/modul1.html' },
            { button: 'Functional programming - Part 1', url: '/module2/modul2.html' },
            { button: 'Functional programming - Part 2', url: '/module2/modul3.html' },
            { button: 'Design patterns', url: '/module2/modul4.html' },
            { button: 'Self Study', url: '/module2/modul5.html' }
        ]
    },
    {
        button: 'Course-Assignment', url: '/module5/index.html', subDomains: [
        ]
    }
];

function innsertLocalNav(parentUrl = '/Noroff', navTitles) {
    let lengthNav = navTitles.length;
    //let subLength = subHeadings.length;

    // add Navigation 
    $('header').append('\
    <nav id="localNav" class="row navbar navbar-expand-lg navbar-light">\
        <div id="outerDivLocal" class="container-fluid">\
            <button\
                class="navbar-toggler" type="button" data-bs-toggle="collapse"\
                data-bs-target="#collapsingLocal" aria-controls="collapsingLocal"\
                aria-expanded="false" aria-label="Togglenavigation">\
            </button>\
            <div id="collapsingLocal" class="collapse navbar-collapse">\
                <ul id="localNavList" class="navbar-nav me-auto mb-2 mb-lg-0">\
                </ul>\
            </div>\
        </div>\
    </nav>');

    // Populate Local NAV
    for (let i = 0; i < lengthNav; i++) {
        let button = navTitles[i].button;
        let menuUrl = navTitles[i].url;
        let lengthNav = navTitles[i].subDomains.length;

        $('ul#localNavList').append(`\
        <li class="nav-item droppdown">\
        <a class="nav-link dropdown-toggle" href="#" id="${button}Toggle"\
        role="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${button}</a>\
        <ul class="dropdown-menu" aria-labelledby="${button}Toggle" id="${button}-List">\
        <li>\
        <a class="dropdown-item" href="${parentUrl}${menuUrl}">${button} Frontpage</a>\
        </li>\
        </ul>\
        </li>`);
        // Insert SubDomains in the droppdown list
        for (let z = 0; z < lengthNav; z++) {
            let subHeadings = navTitles[i].subDomains[z];

            $(`#${button}-List`).append(`\
                <li>\
                    <a class="dropdown-item" href="${parentUrl}${subHeadings.url}">${subHeadings.button}</a>\
                </li>\
            `);
        }
    }
}