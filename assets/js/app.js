/// <reference path="../typings/globals/jquery/index.d.ts" />im
import {welcomeMessage} from "./modules/pages/_home.js";
import {template} from "./modules/footer/_footer.js";
import {siteEmail} from "./modules/data-js/site-email.js";
$(document).ready(function(){


const appInit = () => {
    //WELCOME MESSAGE
    siteEmail.sendEmail();
    welcomeMessage();
    //FOOTER
    $(".footer-container").append(template)
    //SIDE NAV
    $('.sidenav').sidenav(); 
    //PARALLAX
    $('.parallax').parallax();
   //MODAL FOR WHATSAPP
    $('.modal').modal();

   
}
appInit()


})
