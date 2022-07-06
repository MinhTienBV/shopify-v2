let mix = require('laravel-mix')

mix.js('src/scripts/app.js', 'assets')
.sass('src/styles/app.scss', 'assets');

