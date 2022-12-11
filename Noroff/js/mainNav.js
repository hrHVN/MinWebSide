$(document).ready(function () {
    innsertNav();
});

function innsertNav() {
    const mainNavTitles = [
        { button: 'Home', url: '/index.html', active: true },
        { button: 'JS Basic', url: '/programmingFoundations/pfindex.html', active: true },
        { button: 'Frontend', url: '/forntEndTechnologies/fetindex.html', active: true },
        { button: 'OOP', url: '/programmingWithObjects/pwoindex.html', active: true },
        { button: 'Project Methodology', url: '/projectMethodology/pmindex.html', active: false },
        { button: 'Semester Project', url: '/semesterProject/smindex.html', active: false },
        { button: 'JS Servers', url: '/javaScriptServers/jssindex.html', active: false },
        { button: 'dataBases', url: '/databases/dbindex.html', active: false },
        { button: 'Rest Api', url: '/restApi/raindex.html', active: false },
        { button: 'Servers', url: '/serverDeployment/sdindex.html', active: false },
        { button: 'Exam', url: '/examProject/epindex.html', active: false }
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
            <a class="col" href="/Noroff${mainNavTitles[i].url}">\
            ${mainNavTitles[i].button}\
            </a></li>`);
        }
        else {
            break;
        }
    }

    $('#mainNav').addClass('navbar navbar-expand-lg navbar-light');
    $('nav a').addClass('nav-link');
}