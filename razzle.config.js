module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
      },
    },
    {
      name: 'scss',
      options: {
        postcss: {
          dev: {
            sourceMap: false,
          },
        },
      },
    },
  ],
};
