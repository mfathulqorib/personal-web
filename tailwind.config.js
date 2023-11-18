/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        "arrow-down": "arrow-down ease 1.5s infinite",
      },
      backgroundImage: {
        "section-title-01":
          "linear-gradient(to top, transparent 0%, #0e2431 70%)",
      },
      colors: {
        // =====main theme colors=====
        "first-color": "#0e2431",
        "second-color": "#6a59d1",
        "third-color": "#777",

        // =====hover colors=====
        "hover-color": "#614fd0",

        // =====backgroung colors=====
        "body-bg-color": "#fefefe",
        "card-bg-color": "#fff",
        "transparent-color-01": "#0000000a",
        "transparent-color-02": "#6a59d11a",
        "transparent-color-03": "#0000001a",
        "line-color": "#d7d7d7",

        // =====scroll bar colors=====
        "scroll-bar-color": "#c5cadf",
        "scroll-thumb-color": "#70768a",
        "scroll-thumb-hover-color": "#454f6b",
      },
      boxShadow: {
        "box-shadow": "0px 0px 20px rgba(0 0 0 / 10%)",
      },
      fontSize: {
        // =====font size colors=====
        "small-font-size": "0.9em",
        "normal-font-size": "1em",
      },
      keyframes: {
        // =====scroll down animation=====
        "arrow-down": {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};
