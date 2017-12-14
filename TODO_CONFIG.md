# change entry file in `config.paths.js`
```js
  appIndexJs: resolveApp('src/index.tsx'),
```

# modify webpack configs
## there are two configs: for production and developement
add typescript files to resolve.extensions
```js
extensions: ['.tsx', '.ts', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
```

replace eslint with tslint for linting files
```js
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: require.resolve('tslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
```

add typescript file transpilation
```js
          // Process TS with tsc and babel.
          {
            test: /\.(ts|tsx)$/,
            include: paths.appSrc,
            use: [
              {

            loader: require.resolve('babel-loader'),
            options: {
              
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
            },
              },
              {
              loader: require.resolve('ts-loader')
              }
            ]
          },
```

optionally remove eslint packages:
```sh
eval yarn remove (node -e 'console.log(
  Object.keys(
    JSON.parse(require("fs").readFileSync("package.json", "utf8")).dependencies
  )
    .filter(x => x.includes("eslint"))
    .join(" ")
);')
```