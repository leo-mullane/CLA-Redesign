(function(){
  // Breakpoint toggle
  document.querySelectorAll('.seg button').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.seg button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
      document.body.classList.toggle('mobile',b.dataset.bp==='mobile');
    });
  });
  document.getElementById('labels').addEventListener('change',function(e){document.body.classList.toggle('labels',e.target.checked)});

  // Header menus and search
  function closeAll(except){
    document.querySelectorAll('[data-header]').forEach(function(h){
      if(h===except) return;
      h.querySelectorAll('[data-menu]').forEach(function(b){b.setAttribute('aria-expanded','false')});
      h.querySelectorAll('[data-panel]').forEach(function(p){p.hidden=true});
      var s=h.querySelector('[data-search]'); if(s) s.setAttribute('aria-expanded','false');
    });
  }
  document.querySelectorAll('[data-header]').forEach(function(h){
    h.querySelectorAll('[data-menu]').forEach(function(btn){
      btn.addEventListener('click',function(){
        var open=btn.getAttribute('aria-expanded')==='true';
        h.querySelectorAll('[data-menu]').forEach(function(b){b.setAttribute('aria-expanded','false')});
        h.querySelectorAll('[data-panel]').forEach(function(p){p.hidden=true});
        var s=h.querySelector('[data-search]'); if(s) s.setAttribute('aria-expanded','false');
        if(!open){btn.setAttribute('aria-expanded','true');h.querySelector('[data-panel="'+btn.dataset.menu+'"]').hidden=false;}
        h.classList.toggle('rev-open',!open);
      });
    });
    var s=h.querySelector('[data-search]');
    if(s) s.addEventListener('click',function(){
      var open=s.getAttribute('aria-expanded')==='true';
      h.querySelectorAll('[data-menu]').forEach(function(b){b.setAttribute('aria-expanded','false')});
      h.querySelectorAll('[data-panel]').forEach(function(p){p.hidden=true});
      s.setAttribute('aria-expanded',open?'false':'true');
      if(!open){var p=h.querySelector('[data-panel="search"]');p.hidden=false;var i=p.querySelector('input');if(i)i.focus();}
    });
    var bg=h.querySelector('[data-burger]'), dr=h.querySelector('[data-drawer]');
    if(bg) bg.addEventListener('click',function(){
      if(!dr){var f=document.getElementById('furniture'); if(f) f.scrollIntoView({behavior:'smooth'}); return;}
      var open=bg.getAttribute('aria-expanded')==='true';
      bg.setAttribute('aria-expanded',open?'false':'true'); bg.setAttribute('aria-label',open?'Open menu':'Close menu');
      bg.innerHTML='<svg aria-hidden="true"><use href="#i-'+(open?'menu':'close')+'"/></svg>';
      dr.hidden=open; h.classList.toggle('rev-open',!open);
    });
  });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeAll(); });

  // Hero header turns solid when a panel opens over the image
  var style=document.createElement('style');
  style.textContent='.hdr.rev.rev-open{background:#fff;color:var(--navy)}.hdr.rev.rev-open .util{background:var(--cloud)}.hdr.rev.rev-open .btn-contact{border-color:var(--navy);color:var(--navy)}';
  document.head.appendChild(style);
  document.querySelectorAll('.hdr.rev [data-search]').forEach(function(s){
    s.addEventListener('click',function(){var h=s.closest('.hdr');h.classList.toggle('rev-open',s.getAttribute('aria-expanded')==='true');});
  });

  // Hero video pause/play
  var hv=document.getElementById('heroVideo');
  document.querySelectorAll('[data-pause]').forEach(function(b){
    b.addEventListener('click',function(){
      var sec=b.closest('section'); var hv=sec?sec.querySelector('video'):null;
      if(!hv) return;
      if(hv.paused){hv.play();b.setAttribute('aria-label','Pause background video');b.innerHTML='<svg><use href="#i-pause"/></svg>';}
      else{hv.pause();b.setAttribute('aria-label','Play background video');b.innerHTML='<svg><use href="#i-play"/></svg>';}
    });
  });
  if(hv && window.matchMedia('(prefers-reduced-motion: reduce)').matches){hv.pause();}

  // modal-video: videos open in a full-screen player
  var modal=document.createElement('div'); modal.className='vmodal'; modal.hidden=true; modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true'); modal.setAttribute('aria-label','Video player');
  modal.innerHTML='<div class="box"><button class="x" type="button" aria-label="Close video"><svg aria-hidden="true"><use href="#i-close"/></svg></button><div class="slot"></div></div>';
  document.body.appendChild(modal);
  var lastFocus=null;
  function openModal(html){ lastFocus=document.activeElement; modal.querySelector('.slot').innerHTML=html; modal.hidden=false; modal.querySelector('.x').focus(); }
  function closeModal(){ if(modal.hidden) return; modal.hidden=true; modal.querySelector('.slot').innerHTML=''; if(lastFocus) lastFocus.focus(); }
  modal.addEventListener('click',function(e){ if(e.target===modal||e.target.closest('.x')) closeModal(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeModal(); });
  document.querySelectorAll('[data-play]').forEach(function(b){
    b.addEventListener('click',function(){
      var box=b.closest('.fs')||document; var v=box.querySelector('[data-yt]'); if(!v) return;
      openModal('<iframe src="https://www.youtube-nocookie.com/embed/'+v.dataset.yt+'?autoplay=1&rel=0" title="CLA Global video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>');
    });
  });
  document.querySelectorAll('[data-film-play]').forEach(function(b){
    b.addEventListener('click',function(){
      var sec=b.closest('.films'); var t=sec?sec.querySelector('[data-title]').textContent:'';
      openModal('<div class="msg">The film “'+t+'” plays here.<br>On the live site the films are hosted on CLA Global’s video CDN, which this prototype doesn’t connect to.</div>');
    });
  });

  // Share tooltip
  document.querySelectorAll('[data-share]').forEach(function(b){
    var wrap=b.parentElement; if(!wrap.classList.contains('sharewrap')){ var w=document.createElement('span'); w.className='sharewrap'; b.parentNode.insertBefore(w,b); w.appendChild(b); wrap=w; }
    var pop=document.createElement('div'); pop.className='sharepop'; pop.hidden=true; pop.setAttribute('role','group'); pop.setAttribute('aria-label','Share this page');
    pop.innerHTML='<a href="#" aria-label="Share on LinkedIn"><svg><use href="#i-in"/></svg></a><a href="#" aria-label="Share on X"><svg><use href="#i-x"/></svg></a><a href="#" aria-label="Share on Facebook"><svg><use href="#i-fb"/></svg></a><a href="#" aria-label="Share by email"><svg><use href="#i-mail"/></svg></a><a href="#" aria-label="Copy link"><svg><use href="#i-link"/></svg></a>';
    wrap.appendChild(pop);
    b.setAttribute('aria-expanded','false');
    b.addEventListener('click',function(e){ e.preventDefault(); var open=!pop.hidden; pop.hidden=open; b.setAttribute('aria-expanded',open?'false':'true'); });
    pop.addEventListener('click',function(e){ e.preventDefault(); });
  });
  document.querySelectorAll('[data-print]').forEach(function(b){ b.addEventListener('click',function(){ window.print(); }); });

  // Mobile drawer accordions
  document.querySelectorAll('[data-acc]').forEach(function(b){
    b.addEventListener('click',function(){
      var open=b.getAttribute('aria-expanded')==='true';
      b.setAttribute('aria-expanded',open?'false':'true');
      var ul=b.nextElementSibling; ul.hidden=open;
      b.querySelector('svg').style.transform=open?'':'rotate(180deg)';
    });
  });

  // Footer accordions (mobile only, CSS decides visibility)
  document.querySelectorAll('.fcol:not(.connect) h3 button').forEach(function(b){
    b.addEventListener('click',function(){
      var col=b.closest('.fcol'); var open=col.classList.toggle('open');
      b.setAttribute('aria-expanded',open?'true':'false');
    });
  });

  // Campaign film rail: switch the featured film
  document.querySelectorAll('.films').forEach(function(sec){
    sec.querySelectorAll('[data-film]').forEach(function(b){
      b.addEventListener('click',function(){
        var i=+b.dataset.film, d=(window.FILMS||[])[i]; if(!d) return;
        sec.querySelectorAll('[data-film]').forEach(function(x){x.removeAttribute('aria-current')});
        b.setAttribute('aria-current','true');
        sec.querySelector('[data-title]').textContent=d[0];
        sec.querySelector('[data-topic]').textContent=d[1];
        sec.querySelector('[data-body]').textContent=d[2];
        sec.querySelector('[data-cap]').textContent='Film '+String(i+1).padStart(2,'0')+' of '+String(window.FILMS.length).padStart(2,'0');
        var src=b.querySelector('img'), st=sec.querySelector('[data-stage] img');
        if(src&&st) st.src=src.src.replace(/width=\d+&height=\d+/,'width=1280&height=720');
      });
    });
  });
})();
