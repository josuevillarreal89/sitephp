function changeTab(event) {

    event.preventDefault();

    var tab = document.querySelector( '.mdl-layout__tab[href="' + event.target.hash + '"]' );
    tab.click();
    var menu = document.getElementsByClassName('mdl-layout__drawer-button')[0];
    menu.click();

}