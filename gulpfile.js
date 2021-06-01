const { series, src, dest, watch } = require('gulp'); // Cuando tiene llaves es porque tiene varias funciones
const sass = require('gulp-sass'); // Sin llaves cuando solo tiene una funcion

// Función que compila SASS

function css() {
    return src('src/scss/app.scss')
    .pipe( sass({
        outputStyle: 'expanded' // Para cambiar el formato del CSS compilado { expanded, compressed }
    }) )
    .pipe( dest('./build/css') ) // Ruta de salida para el CSS compilado
}

function minificarcss() {
    return src('src/scss/app.scss')
    .pipe( sass({
        outputStyle: 'compressed' // Para minificar nuestro CSS
    }) )
    .pipe( dest('./build/css') )
}

// Esta funcion automatiza el compilado
function watchArchivos() {
    watch('src/scss/**/*.scss', css); // Para que recorra todas las carpetas de scss
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;