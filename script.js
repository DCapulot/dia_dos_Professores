(function(){
  var PHOTO='foto.jpg';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var T = [
   {n:'Amanda Sulter',e:'💻',c:'#5eead4',s:['Linguagem C','Software'],short:'C e Software',
    p:['Foi com você que nós conhecemos a linguagem C e descobrimos o que realmente acontece por baixo do capô do computador.',
       'No começo, cada ponteiro parecia um mistério e cada ponto e vírgula esquecido era um drama. Mas você explicava com calma, desenhava a memória no quadro e nos fazia acreditar que dava para entender.',
       'Em software, você nos ensinou que um bom programa não é só o que funciona: é o que outras pessoas conseguem entender, manter e melhorar. Nós levamos isso para cada projeto que fazemos.'],
    k:'Obrigados por nos ensinar a construir com cuidado, Amanda.',
    code:'#include <stdio.h>\n\nint main(void) {\n    printf("Obrigados, Amanda!\\n");\n    printf("Nós aprendemos a construir com cuidado 💙\\n");\n    return 0;\n}',f:'obrigado.c',
    out:['Obrigados, Amanda!','Nós aprendemos a construir com cuidado 💙']},
   {n:'Sérgio Dias',e:'📡',c:'#ffb547',s:['Redes','Operadoras de celular','Torcedor do Vasco 😅'],short:'Redes e operadoras',
    p:['Com você nós descobrimos que a internet não é mágica: é cabo, é sinal, é protocolo e é muita gente fazendo a conexão acontecer.',
       'Você nos levou dos roteadores e endereços IP até o mundo das operadoras de celular. De repente, cada ligação e cada mensagem passaram a fazer sentido para nós.',
       'Suas aulas nos ensinaram que o mais importante numa rede é ninguém ficar desconectado. E você fez isso com a gente: nunca deixou a turma sem sinal.',
       'Só tem um defeito na sua conexão: o seu time. O Vasco é o único sinal que nós nunca conseguimos estabilizar. 😂 Rede a gente conserta, mas torcida do Vasco só com muita fé! (Brincadeira, professor: o Vasco pode até oscilar, mas você nunca deixou a gente cair.)'],
    k:'Obrigados por conectar o nosso futuro, Sérgio.',
    code:'$ _',f:'terminal',
    out:['$ ping professor-sergio','64 bytes: tempo=1ms perda=0%','> gratidao entregue com sucesso','> aviso: time Vasco com conexao instavel 😂']},
   {n:'Pedro',e:'🌐',c:'#ff6b8b',s:['Java','JavaScript','Criação de sites','Torcedor do Fluminense 💚'],short:'Java, JavaScript e sites',
    p:['Foi com você que nós aprendemos Java primeiro e depois JavaScript, e vimos a primeira página que criamos ganhar vida no navegador. Aquela alegria nós nunca esquecemos.',
       {q:[['me','David: e o Css?'],['him','Pedro: nós não somos design.']]},
       'A gente ri até hoje dessa resposta, e ela diz muito sobre você: honesto, direto e sempre com bom humor.',
       'Outra coisa que nunca vamos esquecer: o seu amor pelo Fluminense. Java a gente aprendeu com você, mas sofrer com o Tricolor é uma matéria que ninguém precisa ensinar. 😂 (Brincadeira, professor: a gente respeita o Tricolor!)',
       'Hoje você é o nosso ex-professor, mas para nós você será sempre o nosso eterno professor. O que você nos ensinou continua rodando em cada linha que escrevemos.'],
    k:'Obrigados por nos mostrar que dá para criar sites do zero, Pedro.',
    code:'public class Obrigado {\n    public static void main(String[] args) {\n        System.out.println("Obrigados, Pedro!");\n        System.out.println("Você será sempre o nosso eterno professor 💙");\n        System.out.println("PS: o Fluminense também tem bug às vezes 😂");\n    }\n}',f:'Obrigado.java',
    out:['Obrigados, Pedro!','Você será sempre o nosso eterno professor 💙','PS: o Fluminense também tem bug às vezes 😂']},
   {n:'Will Araújo',e:'💼',c:'#9b8cff',s:['Modelo de negócios em TI'],short:'Modelo de negócios TI',
    p:['Com você nós aprendemos que tecnologia sozinha não basta: uma boa ideia precisa virar um modelo de negócio.',
       'Você nos ensinou a perguntar quem é o cliente, que problema resolvemos e como isso se sustenta. Perguntas simples que mudaram o jeito como olhamos para qualquer projeto de TI.',
       'Por sua causa, percebemos que dá para ser programador e também empreendedor.'],
    k:'Obrigados por nos ensinar a pensar grande, Will.',
    code:'const ideia = "nosso projeto";\nconst negocio = ideia + cliente + valor;\n\nconsole.log("Obrigados, Will!");\nconsole.log("Nós aprendemos a pensar grande 🚀");',f:'negocio.js',
    out:['Obrigados, Will!','Nós aprendemos a pensar grande 🚀']},
   {n:'Claudio',e:'🤝',c:'#7cf08a',s:['Trabalho em equipe','Apresentação de projeto','Chatbot'],short:'Equipe, apresentação e chatbot',
    p:['Com você nós aprendemos o que nenhum compilador ensina: trabalhar em equipe como numa empresa de verdade, com prazos, tarefas divididas e gente diferente remando para o mesmo lado.',
       'Você também nos ensinou a apresentar o nosso projeto e a contar a nossa ideia com orgulho.',
       'E agora, com o chatbot, você nos mostrou que o futuro já está batendo na porta, e que dá para conversar com ele.'],
    k:'Obrigados por acreditar em nós, Claudio.',
    code:'pergunta = "Quem te ensinou a trabalhar em equipe?"\nresposta = "o professor Claudio 💙"\n\nprint("Bot:", pergunta)\nprint("Você:", resposta)\nprint("Bot: ótima resposta.")',f:'chatbot.py',
    out:['Bot: Quem te ensinou a trabalhar em equipe?','Você: o professor Claudio 💙','Bot: ótima resposta.']},
   {n:'Márcio',e:'🧠',c:'#ff8f5e',s:['Pensar','5W2H','Jogos em Python (POO)','Java'],short:'Pensar, 5W2H, Python e Java',
    p:['Com você nós aprendemos a pensar antes de programar. Você nos ensinou que todo bom código começa com boas perguntas.',
       'O 5W2H virou o nosso jeito de organizar qualquer ideia: o quê, por quê, quem, onde, quando, como e quanto.',
       'Com você também fizemos os nossos primeiros jogos usando orientação a objetos, em Python e depois em Java. Ver um personagem que nós criamos se mexer na tela foi pura emoção.'],
    k:'Obrigados por nos ensinar a pensar, Márcio.',
    code:'class Aluno:\n    def pensar(self):\n        print("5W2H: o quê, por quê, quem, onde, quando, como, quanto")\n\nAluno().pensar()\nprint("Obrigados, Márcio! Você nos ensinou a pensar 🧠")',f:'jogo.py',
    out:['5W2H: o quê, por quê, quem, onde, quando, como, quanto','Obrigados, Márcio! Você nos ensinou a pensar 🧠']}
  ];

  /* Título */
  var t = document.getElementById('title'), i = 0;
  'Feliz Dia dos Professores!'.split(' ').forEach(function(w){
    var s=document.createElement('span');s.className='w';s.setAttribute('aria-hidden','true');
    w.split('').forEach(function(ch){var c=document.createElement('span');c.className='c';c.textContent=ch;c.style.setProperty('--i',i++);s.appendChild(c)});
    t.appendChild(s);t.appendChild(document.createTextNode(' '));
  });

  /* Digitação */
  var type=document.getElementById('type'),go=document.getElementById('go'),txt='> iniciando espetáculo...\nprint("Olá, professores!")\n> pronto. cortinas?',n=0;
  (function tick(){
    var cur=txt.slice(0,n).replace(/"([^"]*)"/,'<b>"$1"</b>');
    type.innerHTML=cur+'<span class="cursor"></span>';
    if(n++<txt.length)setTimeout(tick,reduce?0:55);else go.classList.add('show');
  })();

  /* Canvas */
  var cv=document.getElementById('fx'),cx=cv.getContext('2d'),W,H,P=[];
  function size(){W=cv.width=innerWidth;H=cv.height=innerHeight}size();addEventListener('resize',size);
  var sym=['{ }','</>','0','1',';','()','=>','[]','++','#'],cols=['#5eead4','#ffb547','#ff6b8b','#f6f1e3','#9b8cff'];
  function rain(){return{x:Math.random()*W,y:-20,vy:.4+Math.random()*1.1,vx:0,t:sym[Math.random()*sym.length|0],c:cols[Math.random()*5|0],s:12+Math.random()*14,a:.16+Math.random()*.2,g:0,life:1e9,rot:0,vr:0}}
  function burst(x,y,k,col){for(var j=0;j<k;j++){var an=Math.random()*6.283,sp=3+Math.random()*9;
    P.push({x:x,y:y,vx:Math.cos(an)*sp,vy:Math.sin(an)*sp-4,t:Math.random()<.3?['💙','⭐','✨','💡'][Math.random()*4|0]:sym[Math.random()*sym.length|0],c:col&&Math.random()<.6?col:cols[Math.random()*5|0],s:14+Math.random()*16,a:1,g:.18,life:120+Math.random()*80,rot:0,vr:(Math.random()-.5)*.3})}}
  var tm=0;
  (function loop(){
    cx.clearRect(0,0,W,H);
    if(!reduce&&++tm%14===0&&P.length<160)P.push(rain());
    P=P.filter(function(p){p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;p.life--;p.vx*=.99;if(p.life<30)p.a=Math.max(0,p.life/30);
      cx.save();cx.globalAlpha=p.a;cx.translate(p.x,p.y);cx.rotate(p.rot);cx.fillStyle=p.c;cx.font='600 '+p.s+'px ui-monospace,Menlo,monospace';cx.fillText(p.t,0,0);cx.restore();
      return p.y<H+40&&p.life>0});
    requestAnimationFrame(loop);
  })();

  go.addEventListener('click',function(){
    document.body.classList.add('open');scrollTo(0,0);
    var r=go.getBoundingClientRect();burst(r.left+r.width/2,r.top,70);
    setTimeout(function(){burst(W*.2,H*.5,60);burst(W*.8,H*.5,60)},1100);
    setTimeout(function(){burst(W*.5,H*.35,90)},2000);
  });

  /* Ícones dos professores */
  var box=document.getElementById('profs'),panel=document.getElementById('panel');
  function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
  T.forEach(function(p,k){
    var b=el('button','prof rise');b.type='button';b.style.setProperty('--pc',p.c);b.style.setProperty('--bd',(-k*.6)+'s');b.style.setProperty('--d',(1.4+k*.15)+'s');
    b.setAttribute('aria-label','Ler a carta para '+p.n);
    var ic=el('span','ic',p.e);ic.setAttribute('aria-hidden','true');
    b.appendChild(ic);b.appendChild(el('b','',p.n));b.appendChild(el('small','',p.short));b.appendChild(el('em','tap','👆 clique no seu nome'));
    b.addEventListener('click',function(e){
      document.querySelectorAll('.prof').forEach(function(x){x.classList.remove('on')});b.classList.add('on');
      show(p);var r=ic.getBoundingClientRect();burst(r.left+48,r.top+48,45,p.c);
      setTimeout(function(){panel.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})},120);
    });
    box.appendChild(b);
  });

  function show(p){
    panel.innerHTML='';panel.style.setProperty('--tc',p.c);
    var a=el('article','letter');a.appendChild(el('h2','','Para '+p.n+','));
    var tg=el('div','tags');p.s.forEach(function(s){tg.appendChild(el('span','',s))});a.appendChild(tg);
    p.p.forEach(function(x){
      if(typeof x==='string'){a.appendChild(el('p','',x))}
      else{var c=el('div','chat');x.q.forEach(function(m){c.appendChild(el('div',m[0],m[1]))});a.appendChild(c)}
    });
    a.appendChild(el('p','thanks',p.k));
    var cd=el('div','code'),bar=el('div','bar');bar.innerHTML='<i></i><i></i><i></i>';bar.appendChild(el('span','',p.f));
    var rb=el('button','runbtn pulse','▶ Aperte para rodar');rb.type='button';bar.appendChild(rb);
    var out=el('pre','out');out.setAttribute('aria-live','polite');
    cd.appendChild(bar);var hint=el('p','runhint','👆 Aperte o botão verde e veja o código funcionando!');cd.appendChild(hint);cd.appendChild(el('pre','',p.code));cd.appendChild(out);a.appendChild(cd);
    rb.addEventListener('click',function(){
      if(rb.disabled)return;rb.classList.remove('pulse');hint.style.display='none';rb.disabled=true;rb.textContent='⏳ Rodando...';out.textContent='';out.style.display='block';
      var L=p.out,k=0;
      (function next(){
        if(k>=L.length){rb.disabled=false;rb.textContent='↻ Rodar de novo';var r=rb.getBoundingClientRect();burst(r.left+r.width/2,r.top,70,p.c);return}
        var line=L[k++],j=0,prev=L.slice(0,k-1).join('\n')+(k>1?'\n':'');
        (function ch(){out.textContent=prev+line.slice(0,j);if(j++<line.length)setTimeout(ch,reduce?0:24);else setTimeout(next,reduce?0:380)})();
      })();
    });
    var sb=el('div','signbox'),fg=el('figure','duo'),im=el('img');im.src=PHOTO;im.alt='David Capulot e Daniel Holanda sorrindo no laboratório de informática';
    fg.appendChild(im);fg.appendChild(el('figcaption','','David Capulot e Daniel Holanda'));
    sb.appendChild(el('p','sign','Seus alunos David Capulot e Daniel Holanda 💙'));sb.appendChild(fg);a.appendChild(sb);
    panel.appendChild(a);
  }
  document.getElementById("fphoto").src=PHOTO;
  })();
