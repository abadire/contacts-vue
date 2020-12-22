module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/sass/base.scss";
        @import "@/assets/sass/reset.scss";`,
      },
    },
  },
};
