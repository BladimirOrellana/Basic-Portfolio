/// <reference path="../typings/globals/jquery/index.d.ts" />im
import {welcomeMessage} from "./modules/pages/_home.js";
$(document).ready(function(){


const appInit = () => {
    welcomeMessage();
    $('.sidenav').sidenav(); 
    $('.parallax').parallax();
    $('.modal').modal();
   
}
appInit()


})
