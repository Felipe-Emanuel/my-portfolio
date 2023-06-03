/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      default: ["'Poppins', sans-serif"],
      sans: ["'Abril Fatface', sans-serif"],
      SecondarySans: ["'Antic Didone', serif"],
      SliderTitle: ["'Aboreto', cursive;"],
    },
    colors: {
      transparent: 'transparent',
      white: "#FFFFFF",
      dark: "#000",
      darkSecondary: "#000012",
      orangeDark: "#bc6327",
      blueLight: "#3f76c6",
      HooverBlueLight: "#5b82b8",
      gitHub: "#25282d",
    },
    backgroundColor: {
      transparent: 'transparent',
      black: "#000000",
      white: "#FFFFFF",
      dark: "#121214",
      darkSecondary: "#000012",
      orangeDark: "#bc6327",
      blueLight: "#3f76c6",
      HooverBlueLight: "#5b82b8",
      gitHub: "#25282d",
    },

    keyframes: {
      overlay: {
        "0%": { transform: "translateX(-100%)" },
      },
      jump: {
        "50%": { transform: "scale(1.05)"} 
      },
      appear: {
        "40%": { transform: "scale(1.25) translateY(-2vh) translateX(3.5vw)"},
        "80%": { transform: "scale(1.25) translateY(-2vh) translateX(3.5vw)"},
      },
      showCookie: {
        "0%": { transform: "translateY(100%)"},
      },
    },
    animation: {
      overlay: "overlay 8s 1 linear",
      jump: "jump 500ms 1 linear",
      appear: "appear 6s 1 ease-in forwards",
      showCookie: "showCookie 1s 1 ease-in forwards",
    },
    backgroundImage: {
      'gradient-black-transparent': 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 54%)',
      'orange-flash': 'radial-gradient(44.08% 59.96% at 73.85% 105.96%, #2F1B0E 0%, #000000 86.98%)',
      'gradiant-to-b': 'linear-gradient(180deg, rgba(0,0,0,1) 55%, rgba(188,99,39,0) 100%)',
      'gradiant-to-t': 'linear-gradient(180deg, rgba(18, 18, 20, 0) 0.05%, #000 100%)',
      'gradiant-to-r': 'linear-gradient(-95deg, rgba(18, 18, 20, 0) 0.05%, #000 100%)',
      'gradiant-full-black': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 32%)',
    },
    extend: {
      screens: {
        //setar aqui como normal e mudar tudo, sendo aqui o normal (começando pelo fold) e subindo
        'by-galaxy-fold': '281px',
      }
    },
  },
  plugins: [],
};
