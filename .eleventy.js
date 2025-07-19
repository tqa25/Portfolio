module.exports = function (eleventyConfig) {
  // Copy thư mục public vào _site
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};