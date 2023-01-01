module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx'],
        alias: [
          {
            src: './src',
            components: './src/components',
            screens: './src/screens',
          },
        ],
      },
    ],
  ],
};
