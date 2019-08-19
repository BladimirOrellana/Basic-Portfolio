var welcomeMessage = () => {

    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    var icon = $("<i>");
    icon.addClass('material-icons');
    var greeting = $("<span>");
    greeting.addClass("greeting");
   var  greetingContainer = $("<div>");
   greetingContainer.addClass("center-align")
    if (hourNow < 12){
      greeting.html('Good morning')
     icon.html("local_cafe");

    }
    else if (hourNow < 20){
        greeting.html('Good afternoon')
      icon.html("brightness_low");
    }
    else if (hourNow < 24){
        greeting.html('Good evening')
      icon.html("brightness_2");
    }
    else {
        greeting.html('Welcome')
      icon.html("face");
    }
    greetingContainer.append(greeting)
    greetingContainer.append(icon)

    $("#welcomeMessage").append(greetingContainer)

}

export {welcomeMessage}

