/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {},
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
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "open-menu": "open-menu 0.3s ease-in-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "group-hover:text-cyan-600",
    "group-hover:text-cyan-400",
    "group-hover:scale-125",
    "hover:border-cyan-500",
    {
      pattern: /grid-cols-.+/,
    },
    {
      pattern: /!?(border|bg|text)-(cyan|violet|emerald|slate)-(400|500|600|700).*/,
      variants: ['dark', 'hover', 'group-hover'],
    },
  ],
};