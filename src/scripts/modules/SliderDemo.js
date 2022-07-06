export default class SliderDemo {
  constructor () {
    this.$this = $('.mod-slider')
  }
  init () {
    if (this.$this.length) {
      this.addSlick()
    }
  }
  addSlick () {
    this.$this.find('.slider').slick({
      rows: 0,
      adaptiveHeight: true,
      prevArrow: '<button aria-label="Prev slider" class="slick-prev arrows text-primary-100 h1"><span class="icomoon icon-chevron-left"></span></button>',
      nextArrow: '<button aria-label="Next slider" class="slick-next arrows text-primary-100 h1"><span class="icomoon icon-chevron-right"></span></button>'
    })
  }
}
new SliderDemo().init()

