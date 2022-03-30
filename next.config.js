module.exports = {
  swcMinify: true, // it should be false by default
  optimizeFonts: true, //font optimization
  fontFamily: {
    fredoka: ["Noto Sans JP", "sans-serif"],
    OpenSan: ["Open Sans", "sans-serif"],
  },
  images: {
    domains: ["cdn.myanimelist.net"], //add allowed domains
  },
};
