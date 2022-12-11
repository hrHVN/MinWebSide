$(document).ready(function () {
    innsertLocalNav();
    thisPageActive();
});

function innsertLocalNav() {
    const localNavTitles = [
        { button: 'HTML/CSS', url: '/module1/index.html' },
        { button: 'DOM/BOM', url: '/module2/index.html' },
        { button: 'jQuery/Git', url: '/module3/index.html' },
        { button: 'Bootstrap/UserExperience', url: '/module4/index.html' },
        { button: 'Course Assignment', url: '/module5/index.html' }
    ];

    $('div#collapsing').append(`\
    <ul id="localNavList" class="navbar-nav me-auto mb-2 mb-lg-0"></ul>\
    `);
    // Populate Local NAV
    for (let i = 0; i < 5; i++) {
            $('ul#localNavList').append(`<li class="nav-item droppdown">\
            <a class="nav-link dropdown-toggle" href="" id="${localNavTitles[i].button}Toggle"\
            role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${localNavTitles[i].button}\
            </a>\
            <ul class="droppdown-menu" aria-labelledby="${localNavTitles[i].button}Toggle"\
            id="${localNavTitles[i].button}List">\
            <li><a class="dropdown-item" href="/Noroff/forntEndTechnologies${localNavTitles[i].url}">Module Summary</a></li>\
            </ul></li>`);
        
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