document.addEventListener('DOMContentLoaded', function() {

  // Seleciona o botão
  var toggleBtn = document.getElementById('mi-toggle');
  var HTML = document.documentElement;
  var STORAGE_KEY = 'mi-theme';

  if (!toggleBtn) {
    console.warn('Botão #mi-toggle não encontrado.');
    return;
  }

  // Aplica tema
  function applyTheme(theme) {
    var inverted = (theme === 'inverted');
    if (inverted) {
      HTML.classList.add('inverted');
    } else {
      HTML.classList.remove('inverted');
    }
    toggleBtn.setAttribute('aria-pressed', inverted ? 'true' : 'false');
    toggleBtn.dataset.state = inverted ? 'on' : 'off';
  }

  // Lê preferencia do localStorage
  function getInitialTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'inverted' || saved === 'normal') return saved;
    return 'normal';
  }

  // Alterna tema
  function toggleTheme() {
    var now = HTML.classList.contains('inverted') ? 'normal' : 'inverted';
    applyTheme(now);
    localStorage.setItem(STORAGE_KEY, now);
  }

  // Inicializa
  applyTheme(getInitialTheme());

  // Evento de clique
  toggleBtn.addEventListener('click', function() {
    toggleTheme();
    var music = document.getElementById('music');
    if (music && music.paused) {
      music.play().catch(()=>{});
    }
  });

  // Tecla ESC para voltar ao normal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && HTML.classList.contains('inverted')) {
      applyTheme('normal');
            localStorage.setItem(STORAGE_KEY, 'normal');
          }
        });
      
      });
