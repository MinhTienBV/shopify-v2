const ConvertHeight = (($) => {
  $.fn.convertHeight = function () {
    let element = $(this)
    $(element).height('auto')
    let h1 = 0
    let itemss = $(element)
    itemss.each(function () {
      if (h1 < $(this).height()) {
        h1 = $(this).height()
      }
    })
    itemss.each(function () {
      $(this).height(h1)
    })
  }
})($)
export default ConvertHeight
