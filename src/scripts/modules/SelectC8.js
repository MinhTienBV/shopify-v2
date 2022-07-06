export default class SelectC8 {
  constructor () {
    this.$callSelectC8 = $('.select-c8')
    this.$callSelectC8Option = '.select-c8 option'
    this.formSelectC8 = '.form-select-c8'
    this.dropdownSelectC8 = 'dropdown-select-c8'
    this.dropdownMenu = '.dropdown-menu'
    this.arrow = '<span class="caret-c8 icomoon icon-chevron-down absolute z-1 right-7 top-8"></span>'
    this.dropdownOpen = `.dropdown-select-c8.show, ${this.dropdownMenu}.show`
    this.title = ''
    this.ariaSelected= 'aria-selected'
    this.ariaExpanded= 'aria-expanded'
    this.ulListBox= 'ul[role="listbox"]'
    this.dropToggle= '.dropdown-toggle'
    this.hidden = 'hidden'
    this.show = 'show'
    this.liSelected =  'li.selected'
    this.textSelected = 'selected'
    this.ariaActivedescendant = 'aria-activedescendant'
  }
  init () {
    if (this.$callSelectC8.length) {
      this.renderSelectToDropdown()
      this.clickToggle()
      this.clickSelect()
      this.changeSelectC8()
      this.hoverLiRemoveClass()
      this.clickOutClose()
      this.keyOption()
      this.roleSelectDropdownCloseAction()
      this.searchChareaterSelectbox()
    }
  }
  renderHtml (element, textTitle) {
    const randomId = Math.floor(Math.random() * 10e9)
    let idSelect = element.id || randomId
    idSelect = `id-${idSelect}`
    const $label = $(element).prevAll('label')
    let ariaLabel = ''
    if ($label.length) {
      if ($label.get(0).id) {
        ariaLabel = `${$label.get(0).id}`
      } else {
        ariaLabel = `id-${randomId}-label`
        $label.attr('id', ariaLabel)
      }
    }

    const eleParent = $(element).parent()
    eleParent.find('.dropdown').remove()
    eleParent.after()
      .append(`<div class='dropdown shadow-none z-10 rounded-0 border-0 no-bg h-auto p-0 relative  ${this.dropdownSelectC8}'>
          <a class='dropdown-toggle form-control shadow-none no-underline relative border-1 border-solid border-primary-100 w-full font-bold px-10 py-5 flex items-center text-decoration box-shadow' href='javascript:;' role='combobox' data-toggle='dropdown'aria-haspopup='listbox' aria-expanded="false" role="combobox" aria-controls="${idSelect}" aria-labelledby="${ariaLabel}" ${this.ariaActivedescendant}>
          <span class="filter-option d-block text-truncate overflow-hidden text-ellipsis whitespace-nowrap font-bold pr-10 leading-none text-lg">${textTitle}</span>${this.arrow}</a>
          <div class='dropdown-menu dropdown-menu-c8 absolute top-full left-0 right-0 hidden border-1 border-t-0 bg-white text-reset w-full rounded-0 p-0 m-0 border-solid border-primary-100'>
          <ul class="list-inline m-0 pl-0 list-none" role="listbox" id="${idSelect}" aria-labelledby="${ariaLabel}"></ul>
          </div>
        </div>`)
    $(element).each((_idx, elm) => {
      let tabIndex = 1
      let disabled = ''
      let hidenText = ''
      $(element).find('option', elm).each((id, el) => {
        if ($(el).prop('disabled')) {
          disabled = 'disabled'
          hidenText = `<span class="sr-only">&nbsp; disabled</span>`
        }
        eleParent.find('.dropdown ul').append(`<li ${disabled} class="${disabled} m-0 p-0 font-bold text-lg leading-none" role="option" aria-selected="false" id="combo-${idSelect}-${id}">
        <a href="javascript:;" ${disabled} class="block width-full px-10 py-5 border-b-1 border-rgbaBlack hover:bg-primary-200 hover:text-white no-underline ${disabled}">${el.text} ${hidenText}</a>
        </li>`)
        tabIndex++
        disabled = ''
        hidenText = ''
      })
    })
  }
  titleUndefined (element) {
    this.title = $(element).data('title')
    if (typeof title === 'undefined') {
      let indexActive = 0
      $(element).children('option').each((_indexChild, elementChild) => {
        if (typeof $(elementChild).attr('selected') !== 'undefined') {
          this.title = $(elementChild).text()
          indexActive = $(elementChild).index()
        }
      })
      if (indexActive === 0) {
        this.title = $(element).find('option').first().attr('selected', 'selected').text()
      }
    }
    return this.title
  }
  renderSelectToDropdown () {
    this.$callSelectC8.each((_index, element) => {
      if (!$(element).hasClass('select-done')) {
        this.title = $(element).data('title')
        this.titleUndefined(element)
        this.renderHtml(element, this.title)
        const active = $(element).parents(this.formSelectC8).find('.dropdown-select-c8 .filter-option').text()
        $(element).parents(this.formSelectC8).find(`${this.dropdownMenu} li`).each((_id, el) => {
          if (active === $(el).find('a').text()) {
            $(el).addClass('selected').attr(this.ariaSelected, true)
          }
        })
        $(element).addClass('select-done')
        this.title = ''
      }
    })
  }
  clickToggle () {
    $(document).on('click', this.dropToggle, (e) => {
      const $dropdownRemove = $(`${this.dropdownMenu}, .dropdown-select-c8`)
      const ele = e.currentTarget
      const eleParent = $(ele).parent()
      const eleParents = eleParent.find(this.dropdownMenu)
      if (eleParent.hasClass(this.show)) {
        eleParent.removeClass(this.show)
        eleParents.addClass(this.hidden)
        $(ele).attr(this.ariaExpanded, false)
      } else {
        $dropdownRemove.removeClass(this.show)
        eleParent.addClass(this.show)
        eleParents.removeClass(this.hidden)
        $(ele).attr(this.ariaExpanded, true)
      }
      return false
    })
  }
  multiSelect (ele, index) {
    const dropParent = $(ele).parents(this.formSelectC8)
    const selected = 'selected'
    let string = ''
    if ($(ele).parent().hasClass(selected)) {
      $(ele).parent().removeClass(selected).addClass('not-hover')
      $(ele).parents(this.formSelectC8).find(this.$callSelectC8Option).eq(index).removeAttr(selected)
      // val = $(ele).parents(formSelectC8).find($callSelectC8Option).eq(index).val()
      if ($(ele).parents('ul').find('li.selected:not(.disabled)').length < 1) {
        string = $(ele).parents('ul').find('li.disabled a').text().trim() + ', '
        // string.slice(0, string.length - 2)
      }
    } else {
      $(ele).parent().addClass(selected).removeClass('not-hover')
    }

    $(ele).parents('ul').find('li.selected:not(.disabled)').each((_indexLI, el) => {
      // index = indexLI
      const value = $(el).find('a').text().trim()
      string += value + ', '
    })

    if (!$(ele).parents('.' + this.dropdownSelectC8).hasClass('no-trigger-active')) {
      $(ele).parents('.' + this.dropdownSelectC8).find('.dropdown-toggle .filter-option').text(string.slice(0, string.length - 2))
    }
    dropParent.find(this.$callSelectC8Option).prop(selected, false)
    setTimeout(() => {
      $.each(string.split(', '), (_i, e) => {
        dropParent.find(`.select-c8 option[value="${e}"]`).attr(selected, selected)
      })
      dropParent.find(this.$callSelectC8).change()
    }, 100)

    // console.log('string: ' + string)

    return false
  }
  singleSelect (ele, index) {
    const text = $(ele).text()
    if( $(ele).parent().hasClass('disabled')){
     return false
    }
    if (!$(ele).parents('.' + this.dropdownSelectC8).hasClass('no-trigger-active')) {
      $(ele).parents('.' + this.dropdownSelectC8).find('.dropdown-toggle .filter-option').text(text)
    }
    $(ele).parents('ul').find('li').removeClass('selected').attr(this.ariaSelected, false)
    $(ele).parent().addClass('selected').attr(this.ariaSelected, true)
    const dropParent = $(ele).parents(this.formSelectC8)
    setTimeout(() => {
      dropParent.find(this.$callSelectC8Option).removeAttr('selected').eq(index).attr('selected', 'selected').prop('selected', true)
      const val = dropParent.find(this.$callSelectC8Option).prop('selected', true).eq(index).val()
      dropParent.find(this.$callSelectC8).val(val).change()
      $(ele).parents(`${this.dropdownMenu}, .dropdown-select-c8`).removeClass(this.show)
      $(ele).parents(this.dropdownMenu).addClass(this.hidden)
      dropParent.find(this.dropToggle).attr(this.ariaActivedescendant, $(ele).parents('ul').find(this.liSelected).attr('id'))
    }, 100)
  }
  clickSelect () {
    $(document).on('click', '.dropdown-select-c8 li a', (e) => {
      const ele = e.currentTarget
      const index = $(ele).parents('li').index()
      $('.' + this.dropdownSelectC8).removeClass('focus')
      $(ele).parents('.form-control').find(this.dropToggle).addClass('active')
      $(ele).parents('ul').find('li').removeClass('focus')
      if ($(ele).parents(this.formSelectC8).hasClass('multiselect')) {
        this.multiSelect(ele, index)
      } else {
        this.singleSelect(ele, index)
      }
    })
  }
  hoverLiRemoveClass () {
    $('.' + this.dropdownSelectC8).find('li').on('hover', () => {
      $('.' + this.dropdownSelectC8).find('li').removeClass('not-hover').find('a').blur()
    })
  }
  changeSelectC8 () {
    this.$callSelectC8.change(() => {
      this.$callSelectC8.trigger('changeSelect')
    })
  }
  clickOutClose () {
    $(document).click((event) => {
      if (!$(event.target).closest('.dropdown-select-c8.show, .dropdown-menu.show, .dropdown-select-c8 *').length) {
        $(this.dropdownOpen).find(this.dropToggle).attr(this.ariaExpanded, false)
        $(this.dropdownOpen).removeClass(this.show)
        $(this.dropdownMenu).addClass(this.hidden)
      }
    })
  }
  keyOption () {
    $(document).keyup((e) => {
      if (e.keyCode === 27 && $('.dropdown-select-c8.show').length) {
        $(this.dropdownOpen).find(this.dropToggle).attr(this.ariaExpanded, false)
        $(this.dropdownOpen).removeClass(this.show)
        $(this.dropdownMenu).addClass(this.hidden)
      }
      window.addEventListener('keydown', (keydownEvent) => {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1 && $('.dropdown-select-c8.show').length) {
          keydownEvent.preventDefault()
        }
      }, false)
    })
  }

  isElementInView(element) {
    const bounding = element.getBoundingClientRect();
    const $select = $('.dropdown-menu.dropdown-menu-c8')
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
      $select.innerHeight() &&
      bounding.right <=
      $select.innerWidth()
    );
  }

  scrollToScreen($liCurrent) {
    if (!this.isElementInView($liCurrent[0])) {
      $liCurrent[0].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }

  openDropDown($ele) {
    const $dropdownRemove = $('.dropdown-menu, .dropdown-select-c8')
    const eleParent = $ele.parent()
    const eleParents = eleParent.find(this.dropdownMenu)
    $dropdownRemove.removeClass(this.show)
    eleParent.addClass(this.show)
    eleParents.removeClass(this.hidden)
    $ele.attr(this.ariaExpanded, 'true')
  }

  selectedNext(indexNext, $ele) {
    const $liSelected = $ele.parent().find(this.liSelected);
    const $taindex0 = $ele.parents('.'+this.dropdownSelectC8).find('li')
    $liSelected.removeClass('selected');
    $taindex0.eq(indexNext).addClass('selected');
    $ele.attr(this.ariaActivedescendant,  $taindex0.eq(indexNext).attr('id'))
    this.scrollToScreen($taindex0.eq(indexNext));
  }

  selectedPrev(indexPrev, $ele) {
    const $liSelected = $ele.parent().find(this.liSelected);
    const $taindex0 = $ele.parents('.'+this.dropdownSelectC8).find('li')
    $liSelected.removeClass('selected');
    $taindex0.eq(indexPrev).addClass('selected');
    $ele.attr(this.ariaActivedescendant, $taindex0.eq(indexPrev).attr('id'))
    this.scrollToScreen($taindex0.eq(indexPrev));
  }

  handleTabSelectDropdown(index, eleParent, eleParents, indexLiLast, $taindex0, $ele) {
    if ($('.'+this.dropdownSelectC8).hasClass(this.show)) {
      if(index !== indexLiLast) {
        const indexNext = (index + 1 < $taindex0.length) ? (index + 1) : 0;
        this.selectedNext(indexNext, $ele);
      }
      else {
        eleParent.removeClass(this.show)
        eleParents.addClass(this.hidden)
      }
    }
  }

  handlePgDnSelectDropdown(index, indexLiLast, $taindex0, $ele) {
    if ($('.'+this.dropdownSelectC8).hasClass(this.show)) {
      const indexRemain = indexLiLast - index;
      if(index !== indexLiLast && indexRemain >= 10) {
        const indexNext = (index + 10 < $taindex0.length) ? (index + 10) : 0;
        this.selectedNext(indexNext, $ele);
      }
      else {
        const indexNext = (index + indexRemain < $taindex0.length) ? (index + indexRemain) : 0;
        this.selectedNext(indexNext, $ele);
      }
    }
  }

  handlePgUpSelectDropdown(index, indexLiFirst, $taindex0, $ele) {
    if ($('.'+this.dropdownSelectC8).hasClass(this.show)) {
      const indexRemain = index - indexLiFirst;
      if(index !== indexLiFirst && indexRemain >= 10) {
        const indexPrev = (index - 10 >= 0) ? (index - 10) : $taindex0.length - 10;
        this.selectedPrev(indexPrev, $ele);
      }
      else {
        const indexPrev = (index - indexRemain >= 0) ? (index - indexRemain) : $taindex0.length - indexRemain;
        this.selectedPrev(indexPrev, $ele);
      }
    }
  }

  handleSpaceAndEnterDropdown(eleParent, eleParents, $dropdownRemove, $ele) {
    const $textSelected = $ele.parent().find('li.selected a');
    if (eleParent.hasClass(this.show)) {
      $($textSelected).trigger('click');
      eleParent.removeClass(this.show)
      eleParents.addClass(this.hidden)
      $ele.attr(this.ariaExpanded, false)
    } else {
      $dropdownRemove.removeClass(this.show)
      eleParent.addClass(this.show)
      eleParents.removeClass(this.hidden)
      $ele.attr(this.ariaExpanded, true)
    }
  }

  handleArrowUpDropdown(index, indexLiFirst, $taindex0, $ele) {
    if ($('.'+this.dropdownSelectC8).hasClass(this.show) && index !== indexLiFirst) {
      const indexPrev = (index - 1 >= 0) ? (index - 1) : $taindex0.length - 1;
      this.selectedPrev(indexPrev, $ele);
    }
    this.openDropDown($ele);
  }

  handleArrowDownDropdown(index, indexLiLast, $taindex0, $ele) {
    if ($('.'+this.dropdownSelectC8).hasClass(this.show) && index !== indexLiLast) {
      const indexNext = (index + 1 < $taindex0.length) ? (index + 1) : 0;
      this.selectedNext(indexNext, $ele);
    }
    this.openDropDown($ele);
  }
  handleHomeSelectDropdown($liSelected, $liFirst, $taindex0, indexLiFirst, $ele) {
    this.openDropDown($ele);
    $liSelected.removeClass('selected');
    $liFirst.parent().addClass('selected')
    this.scrollToScreen($taindex0.eq(indexLiFirst));
  }
  handleEndSelectDropdown($liSelected, $liLast, $taindex0, indexLiLast, $ele) {
    this.openDropDown($ele);
    $liSelected.removeClass('selected');
    $liLast.parent().addClass('selected')
    this.scrollToScreen($taindex0.eq(indexLiLast));
  }
  roleSelectDropdownCloseAction() {
    $(document).on('keydown', '[role="combobox"]', (e) => {
      const code = e.keyCode
      const ele = e.currentTarget
      const $liFirst = $(ele).parent().find('li:first a')
      const $liLast = $(ele).parent().find('li:last a')
      const $liSelected = $(ele).parent().find(this.liSelected);
      const $taindex0 = $(ele).parents('.'+this.dropdownSelectC8).find('li')
      const index = $taindex0.index($liSelected)
      const indexLiFirst = $taindex0.index($(ele).parent().find('li:first'))
      const indexLiLast = $taindex0.index($(ele).parent().find('li:last'))
      const $dropdownRemove = $('.dropdown-menu, .dropdown-select-c8')
      const eleParent = $(ele).parent()
      const eleParents = eleParent.find(this.dropdownMenu)
      switch (code) {
        case 9:
          this.handleTabSelectDropdown(index, eleParent, eleParents, indexLiLast, $taindex0, $(ele));
          break;
        case 34:
          this.handlePgDnSelectDropdown(index, indexLiLast, $taindex0, $(ele));
          break;
        case 33:
          this.handlePgUpSelectDropdown(index, indexLiFirst, $taindex0, $(ele));
          break;
        case 13:
        case 32:
          e.preventDefault();
          this.handleSpaceAndEnterDropdown(eleParent, eleParents, $dropdownRemove, $(ele));
          break;
        case 38:
          e.preventDefault()
          this.handleArrowUpDropdown(index, indexLiFirst, $taindex0, $(ele));
          break;
        case 40:
          e.preventDefault()
          this.handleArrowDownDropdown(index, indexLiLast, $taindex0, $(ele));
          break;
        case 36:
          e.preventDefault()
          this.handleHomeSelectDropdown($liSelected, $liFirst, $taindex0, indexLiFirst, $(ele));
          break;
        case 35:
          e.preventDefault()
          this.handleEndSelectDropdown($liSelected, $liLast, $taindex0, indexLiLast, $(ele));
          break;
        default: break;
      }
    });
  }
  searchChareaterSelectbox() {
    $(document).on('keydown', '[role="combobox"]', (ev) => {
      const $target = $(ev.currentTarget)
      const $parent = $target.parents('.'+this.dropdownSelectC8)
      const $listbox = $parent.find('[role="listbox"]')
      const $listOptions = $parent.find('[role="option"]').find('a')
      const code = ev.keyCode || ev.which
      const char = ev.key
      const options = []
      let searchOptions = []
      let indexGoto = -1
      let searchString = this.getSearchString(char)
      const indexActive = $parent.find(`.${this.textSelected}`).index() + 1
      if ((code >64 && code < 91) || (code > 47 && code < 58)) {
        if ($('.'+this.dropdownSelectC8).hasClass(this.hidden)) {
          this.openDropDown($target)
        }
        $listOptions.each((_idx, elm) => {
          options.push($(elm).text().trim())
        })
        const orderedOptions = options.slice(indexActive).concat(options.slice(0, indexActive))
        searchString = this.getSearchString(char)
        const allSameLetter = (array) => array.every((letter) => letter === array[0]);
        searchOptions = orderedOptions.filter((opt) => {
          return opt.toLowerCase().indexOf(searchString.toLowerCase()) === 0
        })
        const firstMatch = searchOptions[0]
        if (firstMatch) {
          indexGoto = options.indexOf(firstMatch)
        } else if (allSameLetter(searchString.split(''))) {
          searchOptions = orderedOptions.filter((opt) => {
            return opt.toLowerCase().indexOf(searchString[0].toLowerCase()) === 0
          })
          indexGoto = options.indexOf(searchOptions[0])
        } else {
          indexGoto = -1
        }
        if (indexGoto > -1) {
          this.maintainScrollVisibility($listOptions[indexGoto], $listbox.parent()[0])
          $listOptions.parent().removeClass(this.textSelected)
          $listOptions.eq(indexGoto).parent().addClass(this.textSelected)
          const LiActive = $('.'+this.dropdownSelectC8).find(this.liSelected)
          $target.attr(this.ariaActivedescendant,  LiActive.attr('id'))
        }
      }
    })
  }
  maintainScrollVisibility(activeElement, scrollParent) {
    const { offsetHeight, offsetTop } = activeElement;
    const { scrollTop, offsetHeight: parentOffsetHeight } = scrollParent;
    const isAbove = offsetTop < scrollTop;
    const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
    if (isAbove) {
      scrollParent.scrollTo(0, offsetTop);
    }
    if (isBelow) {
      scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
    }
  }

  getSearchString(char) {
    if (typeof this.searchTimeout === 'number') {
      window.clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = window.setTimeout(() => {
      this.searchString = '';
    }, 500);
    this.searchString += char;
    return this.searchString;
  }
}

new SelectC8().init()
