// image minification
// const dest = "./public/images",
//   imagemin = require("imagemin"),
//   plugins = [
//     require("imagemin-mozjpeg")()
//   ];
const dest = "./public/img";

//   imagemin = require("imagemin"),


module.exports = class {
  data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true,
    };
  }

  // process all files
  async render() {

    const imagemin = (await import("imagemin")).default;
    const imageminMozjpeg = (await import("imagemin-mozjpeg")).default;
    const imageminPngQuant = (await import("imagemin-pngquant")).default;
    const imageminSvgo = (await import("imagemin-svgo")).default;
    // process images
    const plugins = [imageminMozjpeg(), imageminPngQuant(), imageminSvgo()];
    console.log("optimizing images");

    await imagemin(["src/img/*", "!src/img/*.js"], {
      destination: dest,
      plugins,
    });

    return true;
  }
};
