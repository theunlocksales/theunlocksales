document.addEventListener('DOMContentLoaded',function(){
  var n=document.querySelector('.nav');
  if(n){window.addEventListener('scroll',function(){n.classList.toggle('on',scrollY>40)});if(scrollY>40)n.classList.add('on')}
  var t=document.querySelector('.nt'),m=document.querySelector('.mn');
  if(t&&m){t.addEventListener('click',function(){t.classList.toggle('on');m.classList.toggle('on');document.body.style.overflow=m.classList.contains('on')?'hidden':''});m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){t.classList.remove('on');m.classList.remove('on');document.body.style.overflow=''})})}
  var rv=document.querySelectorAll('.reveal,.rl,.rr');
  if(rv.length){var ro=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('vis')})},{threshold:.1,rootMargin:'0px 0px -30px 0px'});rv.forEach(function(el){ro.observe(el)})}
  var ct=document.querySelectorAll('.counter');
  if(ct.length){var co=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting&&!x.target.dataset.c){x.target.dataset.c='1';an(x.target)}})},{threshold:.5});ct.forEach(function(c){co.observe(c)})}
  function an(el){var tg=parseInt(el.dataset.target),sf=el.dataset.suffix||'',d=2200,st=null;function s(ts){if(!st)st=ts;var p=Math.min((ts-st)/d,1);el.textContent=Math.floor((1-Math.pow(1-p,3))*tg)+sf;if(p<1)requestAnimationFrame(s);else el.textContent=tg+sf}requestAnimationFrame(s)}
  var fb=document.querySelectorAll('.pf-btn'),pc=document.querySelectorAll('.pf-card');
  if(fb.length&&pc.length){fb.forEach(function(b){b.addEventListener('click',function(){fb.forEach(function(x){x.classList.remove('on')});b.classList.add('on');var f=b.dataset.filter;pc.forEach(function(c){if(f==='all'||c.dataset.cat===f){c.style.display='';c.style.animation='fu .4s ease forwards'}else c.style.display='none'})})})}
  var wt=document.querySelector('.waf-tip');
  if(wt){setTimeout(function(){wt.classList.add('on')},4000);setTimeout(function(){wt.classList.remove('on')},9000)}
  var pg=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nl a,.mn a').forEach(function(a){if(a.getAttribute('href')===pg||(pg===''&&a.getAttribute('href')==='index.html'))a.classList.add('on')});
  document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(this.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}})});
});
var _s=document.createElement('style');_s.textContent='@keyframes fu{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}';document.head.appendChild(_s);
