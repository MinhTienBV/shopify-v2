const config = require('../../../../gulpfile.js/config')
const configs = require('./config')
const mode = process.title === 'gulp' ? 'aot' : 'aot'
console.log('Mode: ', mode)
module.exports = {
  content: [
    './src/html/**/*.html',
    './public/**/*.html',
    './public/**/*.html',
    './src/assets/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'serif'],
      body: ['Jost', 'sans-serif']
    },

    extend: {
      keyframes: {
        opacity: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        }
      },
      animation: {
        opacity: 'opacity 1s ease-in-out'
      },
      maxWidth: configs.maxWidths,
      maxHeight: configs.maxHeights,
      screens: configs.Screes,
      colors: configs.Colors,
      backgroundPosition: configs.backgroundPositions,
      backgroundSize: configs.backgroundSizes,
      borderRadius: configs.radiusBorder,
      borderWidth: configs.widthBorder,
      cursor: configs.Cursors,
      fontSize: configs.fontSizes,
      fontWeight: configs.fontWeights,
      letterSpacing: configs.letterSpacings,
      lineHeight: configs.lineHeights,
      listStyleType: configs.listStyleTypes,
      minHeight: configs.minHeights,
      minWidth: configs.minWidths,
      opacity: configs.opacitys,
      order: configs.Orders,
      transformOrigin: configs.transformOrigins,
      transitionDuration: configs.transitionDurations,
      transitionProperty: configs.transitionPropertys,
      transitionTimingFunction: configs.transitionTimingFunctions,
      rotate: configs.rotates,
      scale: configs.scales,
      zIndex: configs.zindexs,
      spacing: configs.spaces,
      inset: configs.insets
    }
  },
  variants: {
    extend: {
      translate: ['motion-safe'],
      display: ['group-hover']
    }

  },
  corePlugins: {
    container: false,
    backgroundOpacity: false,
    borderOpacity: false,
    textOpacity: false,
    boxShadowOpacity: false,
    objectFit: false,
    objectPosition: false,
    overscrollBehavior: false,
    gridTemplateColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gridAutoFlow: false,
    gridAutoColumns: false,
    gridAutoRows: false,
    // space: false,
    // placeholderColor: false,
    // placeholderOpacity: false,
    // borderOpacity: false,
    // divideOpacity: false,
    // divideWidth: false,
    // divideColor: false,
    // gradientColorStops: false,
    boxDecorationBreak: false,
    filter: false,
    blur: false,
    brightness: false,
    contrast: false,
    dropShadow: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    // scale: false,
    // skew: false,
    translate: false,
    saturate: false,
    // boxShadow: false,
    sepia: false,
    backdropFilter: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    isolation: false,
    // ringColor: false,
    // ringOpacity: false,
    // ringOffsetWidth: false,
    // ringOffsetColor: false,
    mixBlendMode: false,
    backgroundBlendMode: false
    // boxShadowColor: false,
    // aspectRatio: false
    // scrollMargin: false
    // scrollPadding: false
    // columns: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen lg': {
            maxWidth: '1000px'
          },
          '@screen xl': {
            maxWidth: '1110px'
          },
          '@screen 2xl': {
            maxWidth: '1390px'
          }
        }
      })
    }
  ]
}
