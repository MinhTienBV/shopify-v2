import './ConvertHeight'
// import 'jquery-match-height'
const FixHeight = (() => {
  let _this = $('.mod-equaheight')
  let _items = $('.equaheight-item')
  // let _itemsV2 = $('.equaheight-item-v2')
  if (_this.length) {
    const EquaHeight = () => {
      _this.each((index, el) => {
        $(el).find(_items).convertHeight()
        // $(el).find(_itemsV2).matchHeight({
        //   byRow: true,
        //   property: 'height',
        //   target: null,
        //   remove: false
        // })
      })
    }

    EquaHeight()
    $(window).resize(() => {
      EquaHeight()
    })
  }
})()
export default FixHeight
