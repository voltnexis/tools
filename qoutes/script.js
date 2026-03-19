// Minimal quote generator logic
    (function(){
      const quotes = [
         // Design & Creativity
         { t: 'Creativity is intelligence having fun.', a: 'Albert Einstein', v: 'RRP8_r686TM' },
         { t: 'Design is not just what it looks like and feels like. Design is how it works.', a: 'Steve Jobs', v: 'BeIWHQ4nc3c' },
         { t: 'Simplicity is the ultimate sophistication.', a: 'Leonardo da Vinci', v: 'UjLAtQPUo3Y' },
         { t: 'Good design is obvious. Great design is transparent.', a: 'Joe Sparano', v: 'N1bHDTD7pbk' },
         { t: 'Creativity takes courage.', a: 'Henri Matisse', v: '1Cb0yAJ0Xlg' },
         { t: 'The details are not the details. They make the design.', a: 'Charles Eames', v: 'TFtBlzSJaqQ' },
         { t: 'Innovation distinguishes between a leader and a follower.', a: 'Steve Jobs', v: 'VQKMoT-6XSg' },
         { t: 'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.', a: 'Antoine de Saint-Exupéry', v: 'dQw4w9WgXcQ' },
         { t: 'Design is thinking made visual.', a: 'Saul Bass', v: 'dQw4w9WgXcQ' },
         { t: 'Design is the silent ambassador of your brand.', a: 'Paul Rand', v: 'dQw4w9WgXcQ' },
         
         // Success & Achievement
         { t: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', a: 'Winston Churchill', v: 'MNL_DAI19_I' },
         { t: 'The only way to do great work is to love what you do.', a: 'Steve Jobs', v: 'UF8uR6Z6KLc' },
         { t: 'Don\'t be afraid to give up the good to go for the great.', a: 'John D. Rockefeller', v: 'dQw4w9WgXcQ' },
         { t: 'The future belongs to those who believe in the beauty of their dreams.', a: 'Eleanor Roosevelt', v: 'dQw4w9WgXcQ' },
         { t: 'It is during our darkest moments that we must focus to see the light.', a: 'Aristotle', v: 'dQw4w9WgXcQ' },
         { t: 'Success is walking from failure to failure with no loss of enthusiasm.', a: 'Winston Churchill', v: 'dQw4w9WgXcQ' },
         { t: 'The way to get started is to quit talking and begin doing.', a: 'Walt Disney', v: 'lRtV-ugIT0k' },
         { t: 'Don\'t let yesterday take up too much of today.', a: 'Will Rogers', v: 'dQw4w9WgXcQ' },
         { t: 'You learn more from failure than from success. Don\'t let it stop you. Failure builds character.', a: 'Unknown', v: 'dQw4w9WgXcQ' },
         { t: 'If you are working on something that you really care about, you don\'t have to be pushed. The vision pulls you.', a: 'Steve Jobs', v: 'dQw4w9WgXcQ' }
         

       ];

      const quoteText = document.getElementById('quoteText');
      const quoteAuthor = document.getElementById('quoteAuthor');
      const newQuote = document.getElementById('newQuote');
      const copyBtn = document.getElementById('copyBtn');
      const downloadBtn = document.getElementById('downloadBtn');
      const tweetBtn = document.getElementById('tweetBtn');
      const videoBtn = document.getElementById('videoBtn');
      const settingsToggle = document.getElementById('settingsToggle');
      const editToggle = document.getElementById('editToggle');
      const settings = document.getElementById('settings');
      const quickEdit = document.getElementById('quickEdit');
      const customQuote = document.getElementById('customQuote');
      const customAuthor = document.getElementById('customAuthor');
      const applyBtn = document.getElementById('applyBtn');
      const saveBtn = document.getElementById('saveBtn');
      const savedList = document.getElementById('savedList');

      let saved = [];
      let seenQuotes = JSON.parse(localStorage.getItem('seenQuotes') || '[]');
      let currentQuote = null;

      function setQuote(q){
        currentQuote = q;
        quoteText.textContent = '"' + q.t + '"';
        quoteAuthor.textContent = '— ' + (q.a || 'Unknown');
        updateVideoBtn();
      }
      
      function updateVideoBtn(){
        const videoBtn = document.getElementById('videoBtn');
        if(currentQuote && currentQuote.v) {
          videoBtn.disabled = false;
          videoBtn.style.opacity = '1';
          videoBtn.textContent = '📺 Video';
        } else {
          videoBtn.disabled = true;
          videoBtn.style.opacity = '0.3';
          videoBtn.textContent = '📺 No Video';
        }
      }

      function randomQuote(){
        const unseenQuotes = quotes.filter((q, i) => !seenQuotes.includes(i));
        if(unseenQuotes.length === 0) {
          seenQuotes = [];
          localStorage.setItem('seenQuotes', '[]');
          return quotes[Math.floor(Math.random()*quotes.length)];
        }
        const randomUnseen = unseenQuotes[Math.floor(Math.random()*unseenQuotes.length)];
        const index = quotes.indexOf(randomUnseen);
        seenQuotes.push(index);
        localStorage.setItem('seenQuotes', JSON.stringify(seenQuotes));
        return randomUnseen;
      }

      newQuote.addEventListener('click', ()=> setQuote(randomQuote()));

      copyBtn.addEventListener('click', async ()=>{
        const raw = quoteText.textContent + ' ' + quoteAuthor.textContent;
        try{
          await navigator.clipboard.writeText(raw);
          copyBtn.textContent = 'Copied ✓';
          setTimeout(()=> copyBtn.textContent = 'Copy',1200);
        }catch(e){
          alert('Copy failed — your browser may block clipboard access.');
        }
      });

      downloadBtn.addEventListener('click', ()=>{
        const txt = quoteText.textContent + '\n' + quoteAuthor.textContent;
        const blob = new Blob([txt],{type:'text/plain'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'quote.txt';
        a.click();
        URL.revokeObjectURL(a.href);
      });

      tweetBtn.addEventListener('click', ()=>{
        const text = quoteText.textContent + ' ' + quoteAuthor.textContent;
        const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text);
        window.open(url,'_blank');
      });
      
      videoBtn.addEventListener('click', ()=>{
        if(currentQuote && currentQuote.v) {
          window.open('https://youtube.com/watch?v=' + currentQuote.v, '_blank');
        }
      });

      settingsToggle.addEventListener('click', ()=>{
        // settings should open only when settings icon clicked
        settings.style.display = settings.style.display === 'none' ? 'block' : 'none';
        quickEdit.style.display = 'none';
      });

      editToggle.addEventListener('click', ()=>{
        quickEdit.style.display = quickEdit.style.display === 'none' ? 'block' : 'none';
        settings.style.display = 'none';
      });

      applyBtn.addEventListener('click', ()=>{
        const q = {t: customQuote.value.trim() || '...', a: customAuthor.value.trim() || 'Unknown'};
        setQuote(q);
      });

      saveBtn.addEventListener('click', ()=>{
        const q = {t: customQuote.value.trim(), a: customAuthor.value.trim()};
        if(!q.t) return alert('Enter a quote before saving.');
        saved.push(q);
        refreshSaved();
      });

      function refreshSaved(){
        if(saved.length===0){ savedList.textContent='(none)'; return }
        savedList.innerHTML = '';
        saved.slice().reverse().forEach((s, idx)=>{
          const d = document.createElement('div');
          d.style.padding='6px 0';
          d.style.borderTop='1px solid rgba(255,255,255,0.02)';
          d.innerHTML = '<div style="font-size:14px">"'+escapeHtml(s.t)+'"</div><div style="font-size:12px;color:var(--muted)">— '+escapeHtml(s.a||'Unknown')+'</div>';
          d.addEventListener('click', ()=> setQuote(s));
          savedList.appendChild(d);
        });
      }

      // small utility
      function escapeHtml(str){ return String(str).replace(/[&<>\"']/g, function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]}) }

      // initialize
      setQuote(randomQuote());

    })();