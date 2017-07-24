/*jshint esversion: 6 */

import $ from 'jquery'; // brings jq in via NPM rather than in the browser

class MobileMenu {
  constructor() {
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }

  events() {
    //'bind' points back to the 'this' in this line and binds it in toggleTheMenu
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
  }
}

export default MobileMenu;
