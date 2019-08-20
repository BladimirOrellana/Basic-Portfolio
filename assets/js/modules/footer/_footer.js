var template;


template = 
`
<div class="page-footer">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Want to know more?</h5>
      <!-- Modal Trigger -->
<a class="waves-effect waves-light btn red modal-trigger" href="#modal1">Message Me! <i class="fab fa-whatsapp"></i></a>

<!-- Modal Structure -->
<div id="modal1" class="modal black-text">
<div class="modal-content">
<h4>I'll get in touch asap</h4>
<div class="row">
<form class="col s12">
<div class="row">
 <div class="input-field col s12">
              <i class="material-icons prefix">create</i>
              <textarea  placeholder="Write..."  cols="70" rows="20" class="validate whatsappTextarea"></textarea>
       </div>
   </div>
</form>
</div>
</div>
<div class="modal-footer">
<a href="#!" class="modal-close waves-effect waves-green btn-flat">send</a>
</div>
</div>

    </div>
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Links</h5>
      <ul>
        <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">GitHub</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link in</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Stack Overflow</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
  © BladimirOrellana 2019
  <a class="grey-text text-lighten-4 right" href="#!">Say Hello</a>
  </div>
</div>
</div>
  

`


 export {template}