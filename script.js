
(function(){
  var toggle=document.getElementById('menuToggle'), nav=document.getElementById('mainNav');
  toggle.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open);
    toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
  });

  var form=document.getElementById('feedbackForm'), status=document.getElementById('formStatus'), channel='whatsapp';
  form.querySelectorAll('button[type=submit]').forEach(function(b){
    b.addEventListener('click',function(){channel=b.getAttribute('data-channel');});
  });
  form.addEventListener('submit',function(e){
    e.preventDefault();
    status.textContent='';
    if(!form.reportValidity()) return;
    var d=new FormData(form);
    var lines=['Category: '+d.get('category'),'Name: '+d.get('name')];
    if(d.get('email')) lines.push('Email: '+d.get('email'));
    lines.push('','Message: '+d.get('message'));
    var text=lines.join('\n');
    if(channel==='email'){
      window.location.href='mailto:abimbola023@gmail.com?subject='+encodeURIComponent('Website feedback: '+d.get('category'))+'&body='+encodeURIComponent(text);
    }else{
      window.open('https://wa.me/2348032278431?text='+encodeURIComponent(text),'_blank','noopener');
    }
    status.textContent='Almost done. Send the message in the app that just opened.';
  });
})();
