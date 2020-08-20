setTimeout(function() {
    try {
        if ((document.getElementsByClassName('ds-navbar-link')[4].innerText.trim().toLowerCase() == "sign in/register")) {
            window.localStorage.setItem('reg','register start');
            console.log('start registration');
        }
        var ref = document.referrer;
        //setTimeout(function(){
  
        if (((ref.includes("https://9502nonprodidp.b2clogin.com") && (ref.includes("signup")&&(!ref.includes("/login"))))|| (ref.includes("practice-account"))) &&
            (((document.getElementsByClassName('ds-navbar-link')[4].innerText.trim().toLowerCase() != "sign in/register"))) &&
            (window.localStorage.getItem('reg')=='register start')) {
            if(window.s && s.eVar8){
      var contact_id= s.eVar8;
      s.linkTrackVars = "events";
            s.linkTrackEvents = "event30";
            console.log(contact_id);
            s.events = "event30:" +contact_id;
            s.tl(this, 'o', 'Registered');
            window.localStorage.removeItem('reg');
        
      }
            
     }
  
    } catch (e) {}
  }, 3000);