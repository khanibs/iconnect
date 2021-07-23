module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary:'#ff6666',
        light: '#ffffff87',
        fontLight:'#fff',
        lightGray:'#f7f7f7',
        gray:"#808080"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: theme => ({
        'section-1': "url('assets/bg-1.jpg')",
        'section-study':"url('assets/bg-2.jpg')",
        'b-2':"url('assets/bg-3.jpg')",
        'b-3':"url('assets/bg-4.jpg')",
       }), height: theme => ({
        "700": "700px",
        "600":"600px",
        "450":"450px",
        "310":"310px",
        "200":"200px",
        "47":"47px", 
      "1":"1.5px"                    }),
             width: theme => ({
              "600": "600px",
              "670":"670px",
              "800":"800px",
              "700":"700px",
              "400":"400px",
              "450":"450px",
                   }),
                  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}