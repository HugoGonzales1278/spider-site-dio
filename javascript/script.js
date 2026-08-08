function handleMouseEnter() {
    console.log(handle Mouse Enter Called, this)
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
  }
  
  function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
  }
  
  function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');
    console.log(cardElements)
    for (let index = 0; index < cardElements.length; index++) {
      const card = cardElements[index];
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
  }
  
  document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
  
  function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  
    carousel.style.transform = newTransform;
  
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
  }

  const botao = document.getElementById("btnTransparencia");

botao.addEventListener("click", () => {
  document.body.classList.toggle("background-transparente");
});

const botao = document.getElementById("btnTransparencia");
const overlay = document.getElementById("overlay");

botao.addEventListener("click", () => {
  overlay.classList.toggle("ativo");
});
/*


// ============================================
// SPIDER-MAN MULTIVERSO - JAVASCRIPT
// ============================================
/*
document.addEventListener('DOMContentLoaded', () => {
  initFancybox();
  initNavigation();
  initVideoLinks();
  initScrollAnimations();
  initVideoBackground();
});

// ============================================
// INICIALIZAR FANCYBOX (GALERIA)
// ============================================
function initFancybox() {
  if (typeof Fancybox !== 'undefined') {
      Fancybox.bind('[data-fancybox]', {
          Toolbar: {
              display: {
                  left: ['infobar'],
                  middle: ['zoomIn', 'zoomOut', 'toggle1to1', 'rotateCCW', 'rotateCW'],
                  right: ['slideshow', 'thumbs', 'close'],
              },
          },
          Thumbs: {
              showOnStart: true,
          },
          animated: true,
          dragToClose: true,
      });
      console.log('✅ Fancybox inicializado com sucesso!');
  } else {
      console.warn('⚠️ Fancybox não encontrado. Verifique o carregamento do script.');
  }
}

// ============================================
// NAVEGAÇÃO ENTRE FILMES
// ============================================
function initNavigation() {
  const navLinks = document.querySelectorAll('.navigator ul li a');
  
  navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
          // Remove active de todos
          navLinks.forEach(l => l.classList.remove('active'));
          // Adiciona active no clicado
          link.classList.add('active');
      });
  });

  // Marcar página atual como ativa (baseado na URL)
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
      }
  });
}

// ============================================
// SISTEMA DE LINKS DE VÍDEO (TRAILER)
// ============================================

/**
* Configuração de vídeos por filme
* Adicione mais entradas conforme necessário
*//*
const movieVideos = {
  'spiderman-2002': {
      trailer: 'https://www.youtube.com/watch?v=t06RUxPbp_c',
      title: 'Homem-Aranha (2002) - Trailer Oficial'
  },
  'spiderman-2004': {
      trailer: 'https://www.youtube.com/watch?v=W_2zVnszykE',
      title: 'Homem-Aranha 2 (2004) - Trailer Oficial'
  },
  'spiderman-2007': {
      trailer: 'https://www.youtube.com/watch?v=w2Yr9adTv6Y',
      title: 'Homem-Aranha 3 (2007) - Trailer Oficial'
  }
};

function initVideoLinks() {
  const linkButtons = document.querySelectorAll('.link-button');

  linkButtons.forEach(button => {
      // Adiciona efeito de clique com feedback visual
      button.addEventListener('click', (e) => {
          const href = button.getAttribute('href');
          
          if (href && href.includes('youtube.com')) {
              console.log(`🎬 Abrindo trailer: ${href}`);
              
              // Efeito visual de clique
              button.style.transform = 'scale(0.95)';
              setTimeout(() => {
                  button.style.transform = '';
              }, 150);

              // Analytics/tracking (opcional)
              trackVideoClick(button);
          }
      });

      // Adiciona tooltip com preview (opcional)
      button.addEventListener('mouseenter', () => {
          showVideoTooltip(button);
      });

      button.addEventListener('mouseleave', () => {
          hideVideoTooltip();
      });
  });
}
/*
// ============================================
// TRACKING DE CLIQUES EM VÍDEO (Analytics)
// ============================================
function trackVideoClick(button) {
  const label = button.querySelector('.label')?.textContent || 'Vídeo';
  console.log(`📊 Analytics: Clique registrado em "${label}"`);
  
  // Aqui você poderia integrar com Google Analytics, etc:
  // gtag('event', 'video_click', { 'video_name': label });
}

// ============================================
// TOOLTIP DE PREVIEW DE VÍDEO
// ============================================
function showVideoTooltip(button) {
  const existingTooltip = document.querySelector('.video-tooltip');
  if (existingTooltip) existingTooltip.remove();

  const tooltip = document.createElement('div');
  tooltip.className = 'video-tooltip';
  tooltip.textContent = '▶ Clique para assistir no YouTube';
  tooltip.style.cssText = `
      position: absolute;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      white-space: nowrap;
      pointer-events: none;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease;
      border: 1px solid #e23636;
  `;

  document.body.appendChild(tooltip);
/*
  const rect = button.getBoundingClientRect();
  tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
  tooltip.style.top = `${rect.top - 45}px`;

  requestAnimationFrame(() => {
      tooltip.style.opacity = '1';
  });
}

function hideVideoTooltip() {
  const tooltip = document.querySelector('.video-tooltip');
  if (tooltip) {
      tooltip.style.opacity = '0';
      setTimeout(() => tooltip.remove(), 300);
  }
}

// ============================================
// ANIMAÇÕES AO SCROLL
// ============================================
function initScrollAnimations() {
  const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);

  document.querySelectorAll('.gallery li').forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(item);
  });
}
/*
// ============================================
// CONTROLE DO VÍDEO DE FUNDO
// ============================================
function initVideoBackground() {
  const bgVideo = document.querySelector('.s-wrapper video');
  
  if (bgVideo) {
      // Garantir que o vídeo toca automaticamente
      bgVideo.play().catch(err => {
          console.warn('⚠️ Autoplay bloqueado pelo navegador:', err);
          // Adicionar botão de play manual se necessário
          addPlayButton(bgVideo);
      });

      // Pausar vídeo quando a aba não está visível (economia de recursos)
      document.addEventListener('visibilitychange', () => {
          if (document.hidden) {
              bgVideo.pause();
          } else {
              bgVideo.play().catch(() => {});
          }
      });
  }
}

function addPlayButton(video) {
  const playBtn = document.createElement('button');
  playBtn.textContent = '▶ Ativar vídeo de fundo';
  playBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #e23636;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 25px;
      cursor: pointer;
      z-index: 100;
      font-size: 0.9rem;
      box-shadow: 0 5px 15px rgba(226, 54, 54, 0.5);
  `;
  
  playBtn.addEventListener('click', () => {
      video.play();
      playBtn.remove();
  });

  document.body.appendChild(playBtn);
}

// ============================================
// FUNÇÃO PARA ADICIONAR NOVOS BOTÕES DE VÍDEO DINAMICAMENTE
// ============================================
function createVideoButton(url, label, container) {
  const li = document.createElement('li');
  
  const link = document.createElement('a');
  link.href = url;
  link.className = 'link-button';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  
  link.innerHTML = `
      <span class="icon">
          <div class="play-icon"></div>
      </span>
      <span class="label">${label}</span>
  `;
  
  li.appendChild(link);
  container.appendChild(li);
  
  // Re-inicializar eventos para o novo botão
  initVideoLinks();
  
  return li;
}

// Exemplo de uso (adicionar mais botões dinamicamente):
// const linksContainer = document.querySelector('.s-links ul');
// createVideoButton('https://youtube.com/watch?v=XXXXX', 'Ver Cena Extra', linksContainer);

console.log('🕷️ Spider-Man Multiverso - Sistema carregado com sucesso!');
*/