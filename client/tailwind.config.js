module.exports = {
  content: [
    "./src/App.jsx",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      productTitle: ["Poetsen One", "sans-serif"],
    },
    extend: {
      colors: {
        customGreen: "#9AD0C2",
        //   current: 'currentColor',
        //   transparent: 'transparent',
        //   white: '#FFFFFF',
        //   black: '#1C2434',
        //   'black-2': '#010101',
        //   body: '#64748B',
        //   bodydark: '#AEB7C0',
        //   bodydark1: '#DEE4EE',
        //   bodydark2: '#8A99AF',
        //   primary: '#3C50E0',
        //   secondary: '#80CAEE',
        //   stroke: '#E2E8F0',
        //   graydark: '#333A48',
        //   'gray-2': '#F7F9FC',
        //   'gray-3': '#FAFAFA',
        //   whiten: '#F1F5F9',
        //   whiter: '#F5F7FD',
        //   boxdark: '#24303F',
        //   'boxdark-2': '#1A222C',
        //   strokedark: '#2E3A47',
        //   'form-strokedark': '#3d4d60',
        //   'form-input': '#1d2a39',
        //   'meta-1': '#DC3545',
        //   'meta-2': '#EFF2F7',
        //   'meta-3': '#10B981',
        //   'meta-4': '#313D4A',
        //   'meta-5': '#259AE6',
        //   'meta-6': '#FFBA00',
        //   'meta-7': '#FF6766',
        //   'meta-8': '#F0950C',
        //   'meta-9': '#E5E7EB',
        //   success: '#219653',
        //   danger: '#D34053',
        //   warning: '#FFA70B',
      },
      fontSize: {
        "title-xxl": ["44px", "55px"],
        "title-xl": ["36px", "45px"],
        "title-xl2": ["33px", "45px"],
        "title-lg": ["28px", "35px"],
        "title-md": ["24px", "30px"],
        "title-md2": ["26px", "30px"],
        "title-sm": ["20px", "26px"],
        "title-xsm": ["18px", "24px"],
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        11: "2.75rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        14: "3.5rem",
        14.5: "3.625rem",
        15: "3.75rem",
        15.5: "3.875rem",
        16: "4rem",
        16.5: "4.125rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        18.5: "4.625rem",
        19: "4.75rem",
        19.5: "4.875rem",
        21: "5.25rem",
        21.5: "5.375rem",
        22: "5.5rem",
        22.5: "5.625rem",
        24.5: "6.125rem",
        25: "6.25rem",
        25.5: "6.375rem",
        26: "6.5rem",
        27: "6.75rem",
        27.5: "6.875rem",
        29: "7.25rem",
        29.5: "7.375rem",
        30: "7.5rem",
        31: "7.75rem",
        32.5: "8.125rem",
        34: "8.5rem",
        34.5: "8.625rem",
        35: "8.75rem",
        36.5: "9.125rem",
        37.5: "9.375rem",
        39: "9.75rem",
        39.5: "9.875rem",
        40: "10rem",
        42.5: "10.625rem",
        44: "11rem",
        45: "11.25rem",
        46: "11.5rem",
        47.5: "11.875rem",
        49: "12.25rem",
        50: "12.5rem",
        52: "13rem",
        52.5: "13.125rem",
        54: "13.5rem",
        54.5: "13.625rem",
        55: "13.75rem",
        55.5: "13.875rem",
        59: "14.75rem",
        60: "15rem",
        62.5: "15.625rem",
        65: "16.25rem",
        67: "16.75rem",
        67.5: "16.875rem",
        70: "17.5rem",
        72.5: "18.125rem",
        73: "18.25rem",
        75: "18.75rem",
        90: "22.5rem",
        94: "23.5rem",
        95: "23.75rem",
        100: "25rem",
        115: "28.75rem",
        125: "31.25rem",
        132.5: "33.125rem",
        150: "37.5rem",
        171.5: "42.875rem",
        180: "45rem",
        187.5: "46.875rem",
        203: "50.75rem",
        230: "57.5rem",
        242.5: "60.625rem",
      },

      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("daisyui"),
    require("preline/plugin"),
  ],
};
