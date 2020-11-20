![WideImg](https://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 20

- Automatización de tareas de desarrollo Frontend
  - gulp
  - Webpack

## [Gulp](https://gulpjs.com/)

Gulp es uno de los gestores de tareas más populares en desarrollo front, lo cual permite automatizar ciertas tareas de nuestro proyecto a partir de una configuración única.

**Características**

- Filosofía de código sobre configuración
- Basado en stream
- No es necesario usar archivos temporales
- Claridad en creación de tareas y seguimiento de procesos
- Gran cantidad de Plugins
- Cuenta con una comunidad sólida y madura
- Su curva de aprendizaje es moderada

### Configuración

Podemos instalar gulp tanto de forma global como de forma local. Lo instalaremos usando npm.

```shell
npm install -g gulp@3

# O bien

npm install --save-dev gulp@3
```

Si no indicamos la versión, se instalará la versión 4. Esta versión si bien es la más moderna, es muy poco usada en la comunidad.

Una vez instalado, crearemos un fichero `gulpfile.js` donde definiremos las tareas que queremos automatizar.

```javascript
const gulp = require('gulp')

gulp.task('default', () => {
  console.log('Esta tarea es la que tendremos por defecto cada vez que ejecutemos gulp')
})
```

Una vez creado el fichero, podremos ejecutar la tarea usando el comando `gulp`.

```shell
gulp
```

### Uso

La API de gulp contiene 4 elementos muy importantes que serán con los que interactuaremos para definir nuestras tareas en el fichero `gulpfile.js`:

- `gulp.task`: Sirve para definir tareas

```javascript
gulp.task('minify', () =>  {
  return gulp
    .pipe(eslint())
    .pipe(gulp.dest('dist'))
})
```

En caso de que queramos indicar dependencias entre tareas, debemos indicarlas en la tarea como array.

```javascript
gulp.task('build', ['linter', 'minify'], () => {

})
```

- `gulp.src`: Sirve para obtener los ficheros que queremos tratar.

- `gulp.dest`: Apunta al lugar donde queremos que acaben los ficheros.

```javascript
gulp.task('minify', () => {
  gulp.src('src/**.js')
    .pipe(minify)
    .pipe(gulp.dest('public'));
});
```

- `gulp.watch`: Permite monitorizar uno o varios archivos y lanzar tareas cuando ocurran cambios en los mismos.

```javascript
gulp.watch('src/*.js', ['linter'])
```

### Ejemplos

```javascript
// Concatenación y uglificado de archivos
const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('concat-ugly', () => {
  gulp.src('js/sources/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
```

- [Ejemplo complejo gulp 4](https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a)

### Recursos

- [Awesome gulp](https://alferov.github.io/awesome-gulp)

## [Webpack](https://webpack.js.org/)

Webpack es un empaquetador de módulos (bunlder) para archivos estáticos. Se usa, entre otras, para:

- Gestión de dependencias
- Gestionar tareas
- Conversión de formatos

Su uso está muy extendido y casi todos los frameworks de desarrollo web modernos se integran con él. No obstante, su configuración es realmente compleja, por lo que normalmente se utilizan soluciones construidas sobre webpack para facilitar el desarrollo.

Cuando configuramos webpack en nuestro proyecto, este trata todos los archivos que se encuentra como módulos y con estos forma un grafo de dependencias entre archivos. Una vez formado, Webpack se encarga de transformar todo el código en un único paquete (bundle) que contenga todos los módulos en el oden que sean necesarios. Este bundle será el que finalmente utilicemos en nuestro archivo HTML.

***Conceptos clave***

- Loaders: Se encargan de transformar cualquier archivo que no sea JS en módulos con los que Webpack pueda trabajar.
- Plugins: Son el core de webpack. Se utilizan para multitud de tareas, optimización de módulos, minificado, inyección de scripts, etc
- Modo: Permite especificar en qué entorno estamos trabajando, si es desarrollo o es producción.

### Configuración

- Instalación

```shell
npm i --save-dev webpack webpack-cli
```

- Configuración

Si lo ejecutamos a continuación, sin haber configurado nada, Webpack nos informará de que no hemos configurado ningún modo, por lo que usará el modo de producción que tiene ciertas configuraciones por defecto. En este contexto, Webpack siempre tomará como entrada por defecto el fichero `src/index.js` y la salida será `dist/main.js`. En este archivo nos encontraremos la versión uglificada de nuestro código.

En caso de que usemos el modo de desarrollo (`--mode development`), este nos mostrará nuestro código no uglificado como un módulo.

Para hacer una configuración específica, crearemos un archivo `webpack.config.js` que la contenga. Dicho archivo estará en la raíz del proyecto. Dicho archivo tendrá el siguiente formato:

```javascript
const path = require('path')

module.exports = {
  mode: 'development' // Esto será development o production
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' // Con esto estamos indcando que mantenga el nombre de archivo original
  },
  resolve: {
      extensions: ['js'] // aquí indicaremos qué tipo de archivos deberá tratar webpack
  },
  module: {
      rules: [
        {
          test: /.js$/,
          use: 'babel-loader' // Aquí podríamos usar más de uno si fuese un array
        }
      ] // Aquí definiremos los loaders que procesarán los archivos
  },
  plugins: [],
  devtool: 'source-map' // Esto nos permitirá saber la correspondencia entre nuestro código y el código 'empaquetado'
}
```

**Ejemplo**

```javascript
/**
 * @see https://gist.github.com/danielwrobert/cac4a4a44f1430339861
 **/
const path = require( 'path' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ( env, options ) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve( __dirname, 'build' ),
      filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx$|\.es6$|\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react'],
            }
          },
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: ( options.mode == 'production' ? true : false ),
                sourceMap: true,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [ require( 'autoprefixer' ) ]
              }
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/'
              }
            }
          ]
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: '[id].css'
      })
    ],
  }
};
```

### Alternativas

- [ParcelJs](https://parceljs.org/)
- [RollupJs](https://rollupjs.org/guide/en/)

# The END

![final de curso](https://media.giphy.com/media/JLtQeoVXD5yKI/giphy.gif)
