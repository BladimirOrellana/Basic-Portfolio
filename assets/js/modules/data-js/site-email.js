var siteEmail = {
    sendEmail: () => {
        $("#sendBotton").on('click', function(){
           var firstName = $("#firstName").val().trim();
           var lastName = $("#lastName").val().trim();
           var email = $("#email").val().trim();
           var comment = $("#comment").val().trim();

          var emailDataBase = 'https://bladimirorellana.com/data/site-email.php?action=save-email';

           $.ajax({
               url: emailDataBase,
               type:'POST',
               data:{firstName,lastName,email,comment}
           }).then(function(result){
               console.log(result)
               if(result === '1'){
               M.toast({html: 'Email sent       Thank you!'})
               }else{
                M.toast({html: result});
               }

            
           })
        })
    }
}

export {siteEmail}