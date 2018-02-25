function getCopyrightDate() {
    var lol = document.getElementById('tc-footer');

    var todaysDate = new Date();
    lol.innerHTML = 'Copyright ' + todaysDate.getFullYear();
}
