/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        // 💡 1. Slate, Neutral, Blue 색상 팔레트를 순수한 모노톤으로 오버라이딩
        slate: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#000000', // 다크 모드 텍스트 (400 계열을 많이 씀)
          500: '#000000',
          600: '#000000',
          700: '#000000', // 라이트 모드 텍스트 (700 계열을 많이 씀)
          800: '#000000',
          900: '#000000',
        },
        neutral: {
          100: '#ffffff',
          200: '#ffffff',
          300: '#000000', // 손 모양 아이콘 배경 등 (라이트 모드)
          400: '#ffffff',
          500: '#000000', // 손 모양 아이콘 배경 등 (다크 모드)
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        blue: {
          600: 'transparent', // 소셜 아이콘 배경색 투명하게 제거
        }
      },
      // 💡 2. Typography 플러그인의 커스텀 설정을 제거하거나 비웁니다.
      // 이렇게 하면 테마의 복잡한 색상 변수 정의가 사라지고,
      // 위에서 정의한 순수한 Slate 팔레트만 사용하게 됩니다.
      typography: {
        slate: {
          css: {} // 빈 객체로 덮어씌워 기존 설정을 무력화
        }
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.3s ease-in-out forwards",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    {
      pattern: /grid-cols-.+/,
    },
  ],
};