$(document).ready(function () {
    thisPageActive();
});

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