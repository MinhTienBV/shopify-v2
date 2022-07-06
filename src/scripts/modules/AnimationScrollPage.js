export default class AnimationScrollPage {
  constructor () {
    this.$elems = $('.animation')
    this.winH = window.innerHeight
    this.winW = window.innerWidth
    this.offset = window.innerHeight
    this.wintop = null
    this.topcoords = null
  }
  init () {
    this.animationEle()
    $(window).on('scroll resize', () => {
      this.animationEle()
    })
  }
  animationEle () {
    this.offset = this.winH
    if ($('body').hasClass('has-animation')) {
      this.wintop = $(window).scrollTop()
      this.$elems.each((_index, ele) => {
        const $elm = $(ele)
        if ($elm.hasClass('set-animation')) {
          return true
        }
        this.topcoords = $elm.offset().top
        if (this.wintop > (this.topcoords - this.offset)) {
          $elm.addClass('set-animation')
        }
        return true
      })
    }
  }
}

new AnimationScrollPage().init()
