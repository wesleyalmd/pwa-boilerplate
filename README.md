# A complete PWA Boilerplate

This boilerplate uses:

- React 16.8
- Redux 4
- React Router 5
- Babel 7
- Webpack 4
- Jest 24.8
- Enzyme 3.9
- Prettier 1.17
- Styled Components 4.2
- Storybook 5.0

# Usage

To use this boilerplate you need to run the following commands

```
$ npm install
$ npm start
```

Then http://localhost:3000 shall open

# Production

For production usage you need to run `npm run build`

# Run tests

Unit tests using Jest: `npm test`

# Webpack configs

### Styles

Webpack functions are set to fast work with styled components, case needs entry css/scss, install the dependencies, and add the node in webpack module:

`npm i -D css-loader style-loader node-sass sass-loader`

```
{
  test: /\.css$/,
  use: [
    { loader: 'style-loader' }, 
    { loader: 'css-loader' }
  ],
},
{
  test: /\.scss$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: { 
        sourceMap: development 
      },
    },
    {
      loader: 'sass-loader',
      options: { 
        sourceMap: development 
      },
    },
  ],
},
```

### File loader

If you want process the files as images, fonts:

`npm i -D file-loader`

Webpack module for images:

```
{
  test: /\.(jpe?g|ico|png|gif|svg)$/i,
  loader: 'file-loader?name=img/[name].[ext]',
}
```

Module for fonts: 
```
{
  test: /\.(otf|ttf)$/i,
  loader: 'file-loader?name=fonts/[name].[ext]',
},
```