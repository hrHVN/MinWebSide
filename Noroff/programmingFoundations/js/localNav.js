
function thisPageActive() {
    // basic page parameters
    let domListOfa = document.getElementsByTagName('a');
    let thisUrl = document.URL;
    let numLinks = domListOfa.length;

    // seperating urlString for identification of path
    const mainPageGrupe = thisUrl.split('/');

    // List of relevant Links
    const mainHeadingsList = [
        'AW01-3_Programming%20Foundations',
        'AW04_ForntEndTech'
    ];
    const subHeadingList = [
        'module1', 'module2', 'module3', 'module4', 'module5'
    ];

    // Loop
    for (i = 0; i < numLinks; i++) {
        let link = domListOfa[i];

        // set current "local" link to active in nav
        if (link['href'] == thisUrl) {
            link.classList.add('css-success');
        }

        // set main folderGroupe to active in Nav
        mainPageGrupe.forEach(element => {
            if (mainHeadingsList.includes(element) && (subHeadingList.includes(element) != true)) {
                link.classList.add('main-active');
                console.log('mainHeadingList ' + mainHeadingsList.includes(element));
                console.log('link href ' + link['href'] + ' ' + link['text']);
                console.log('element ' + element);
                console.log(' ');
            }
        });
    }

}