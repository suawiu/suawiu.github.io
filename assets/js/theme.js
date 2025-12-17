var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var faviconLink = document.getElementById('favicon-link'); // head.html에 추가한 ID
var faviconLink = document.getElementById('favicon-link'); 

// 파비콘 업데이트 함수
function updateFavicon(isDark) {
    if (faviconLink) {
        // data-속성에서 정확한 경로를 읽어옴
        faviconLink.href = isDark ? faviconLink.getAttribute('data-dark-icon') : faviconLink.getAttribute('data-light-icon');
    }
}

// 초기 로딩 시 파비콘 상태 설정
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    updateFavicon(true);
} else {
    themeToggleDarkIcon.classList.remove('hidden');
    updateFavicon(false);
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // 버튼 내부 아이콘 토글
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // 로컬 스토리지 설정이 있는 경우
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            updateFavicon(true);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            updateFavicon(false);
        }

    // 로컬 스토리지 설정이 없는 경우 (시스템 설정 따름)
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            updateFavicon(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            updateFavicon(true);
        }
    }
});