$(document).ready(function () {
   innsertMainNav();
});

function innsertMainNav() {
    const mainNavTitles = [
        { button: 'Home', url: './index.html', active: true },
        { button: 'JS Basic', url: './pages/programmingFoundations/pfindex.html', active: true },
        { button: 'Frontend', url: './pages/forntEndTechnologies/fetindex.html', active: true },
        { button: 'OOP', url: './pages/programmingWithObjects/pwoindex.html', active: true },
        { button: 'Project Methodology', url: './pages/projectMethodology/pmindex.html', active: false },
        { button: 'Semester Project', url: './pages/semesterProject/smindex.html', active: false },
        { button: 'JS Servers', url: './pages/javaScriptServers/jssindex.html', active: false },
        { button: 'dataBases', url: './pages/databases/dbindex.html', active: false },
        { button: 'Rest Api', url: './pages/restApi/raindex.html', active: false },
        { button: 'Servers', url: './pages/serverDeployment/sdindex.html', active: false },
        { button: 'Exam', url: './pages/examProject/epindex.html', active: false }
    ];

    //insert header
    $('head').after('<header class="container-md bg-light"></header>');
    // add title and logo line
    $('header').append(`<div class="row"><h1>${document.title}</h1></div>`);
    
    // add Navigation 
    $('header').append('<nav id="mainNav" class="row">\
    <div id="outerDiv" class="container-fluid">\
        <button\
            class="navbar-toggler" type="button" data-bs-toggle="collapse"\
            data-bs-target="#collapsing" aria-controls="collapsing"\
            aria-expanded="false" aria-label="Togglenavigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
    <div id="collapsing" class="collapse navbar-collapse">\
        <ul id="mainNavList" class="navbar-nav me-auto mb-2 mb-lg-0"></ul>\
    </div></div></nav>');

    // Populate main NAV
    for (let i = 0; i < 10; i++) {
        if (mainNavTitles[i].active) {
            $('ul#mainNavList').append(`<li>\
            <a class="col" href="${mainNavTitles[i].url}">${mainNavTitles[i].button}</a></li>`);
        }
        else {
            break;
        }
    }

    $('#mainNav').addClass('navbar navbar-expand-lg navbar-light');
    $('nav a').addClass('nav-link');
}

function innsertLocalNav(parentUrl = '/Noroff', navTitles) {
    let lengthNav = navTitles.length;

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