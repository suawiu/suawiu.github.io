/* =========================
   Theme toggle + favicon
========================= */

var themeToggleBtn = document.getElementById('theme-toggle');
var faviconLink = document.getElementById('favicon-link');

// 파비콘 업데이트
function updateFavicon(isDark) {
  if (!faviconLink) return;

  faviconLink.href = isDark
    ? faviconLink.getAttribute('data-dark-icon')
    : faviconLink.getAttribute('data-light-icon');
}

/* 초기 테마 설정 */
var isDarkInit =
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

document.documentElement.classList.toggle('dark', isDarkInit);
updateFavicon(isDarkInit);

/* 테마 토글 */
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function () {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    updateFavicon(isDark);
  });
}

/* =========================
   Fullscreen menu toggle
========================= */

var hamburger = document.getElementById('hamburger-button');
var fullscreenMenu = document.getElementById('fullscreen-menu');

if (hamburger && fullscreenMenu) {
  hamburger.addEventListener('click', function () {
    fullscreenMenu.classList.toggle('active');
    document.body.classList.toggle(
      'menu-open',
      fullscreenMenu.classList.contains('active')
    );
  });
}

// 배경 클릭 시 닫기
if (fullscreenMenu) {
  fullscreenMenu.addEventListener('click', function (e) {
    if (e.target === fullscreenMenu) {
      fullscreenMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

// ESC 키로 닫기
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && fullscreenMenu.classList.contains('active')) {
    fullscreenMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});
