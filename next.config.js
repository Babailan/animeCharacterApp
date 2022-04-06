module.exports = {
  swcMinify: true, // it should be false by default
  optimizeFonts: true, //font optimization
  fontFamily: {
    OpenSan: ["Open Sans", "sans-serif"],
    Kanit: ["Kanit", "sans-serif"],
  },
  images: {
    domains: ["cdn.myanimelist.net"], //add allowed domains
  },
};
