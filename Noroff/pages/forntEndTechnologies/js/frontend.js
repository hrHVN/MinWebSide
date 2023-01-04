
$(document).ready(function () {
    innsertLocalNav('/pages/forntEndTechnologies', localNavTitles);
    //thisPageActive();
});

const localNavTitles = [
    {
        button: 'HTML-CSS', url: '/module1/index.html', subDomains: [
            { button: 'HTML Basics - Part 1', url: '/module1/modul1.html' },
            { button: 'HTML Basics - Part 2', url: '/module1/modul2.html' },
            { button: 'CSS Basics - Part 1', url: '/module1/modul3.html' },
            { button: 'CSS Basics - part 2', url: '/module1/modul4.html' },
            { button: 'Self Study', url: '/module1/modul5.html' }
        ]
    },
    {
        button: 'DOM-BOM', url: '/module2/index.html', subDomains: [
            { button: 'Document Object Model - Part 1', url: '/module2/modul1.html' },
            { button: 'Document Object Model - Part 2', url: '/module2/modul2.html' },
            { button: 'Browser Object Model - Part 1', url: '/module2/modul3.html' },
            { button: 'Browser Object Model - Part 2', url: '/module2/modul4.html' },
            { button: 'Self Study', url: '/module2/modul5.html' }
        ]
    },
    {
        button: 'jQuery-Git', url: '/module3/index.html', subDomains: [
            { button: 'jQuery - part 1', url: '/module3/modul1.html' },
            { button: 'jQuery - part 2', url: '/module3/modul2.html' },
            { button: 'GIT - Part 1', url: '/module3/modul3.html' },
            { button: 'GIT - Part 2', url: '/module3/modul4.html' },
            { button: 'Self Study', url: '/module3/modul5.html' }
        ]
    },
    {
        button: 'Bootstrap-UserExperience', url: '/module4/index.html', subDomains: [
            { button: 'Bootstrap - Part 1', url: '/module4/modul1.html' },
            { button: 'Bootstrap - part 2', url: '/module4/modul2.html' },
            { button: 'User Experience', url: '/module4/modul3.html' },
            { button: 'Introduction to Web Api\'s', url: '/module4/modul4.html' },
            { button: 'Self Study', url: '/module4/modul5.html' }
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

function thisPageActive() {
    const dom = document.getElementsByTagName('a');
    let activeUri = document.URL;

    for (let i = 0; i < dom.length; i++) {
        if (dom[i]['href'] == activeUri) {
            $(dom[i]).addClass('btn-success');
            console.log(`acttiveURI: ${activeUri} and i = ${dom[i]['href']}`);

        }
    }
}

function xmlRequest() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://hplussport.com/api/products');

    request.onload = function () {
        var response = request.response;
        var parsedData = JSON.parse(response);
        console.log(parsedData);
    }

    request.send();
}

function ajaxRequest() {
    $.ajax({
        url: "request.open('GET', 'https://hplussport.com/api/products')",
        success: function (response) {
            console.log(response);
            if (response.data.user != null) {
                var originalUrl = response.dara.user.avatar_url;
                $('body').appendd(`<img src=${originalUrl}></img>`);
            }
        },

        error: function () {
            console.log('Something went wrong!');
        }
    });
}