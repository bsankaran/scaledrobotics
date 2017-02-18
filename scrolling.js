// Cache selectors
var lastId,
  menu = $('#menu'),
  menuItems = menu.find('a'),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr('href'))
    if (item.length) { return item }
  }),
  topMenuHeight = 0

console.log(scrollItems)

menuItems.click(function (e) {
  var href = $(this).attr('href'),
    offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 500)
  e.preventDefault()
})

$(window).scroll(function () {
   // Get container scroll position
  var fromTop = $(this).scrollTop()

   // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) {
      return this
    }
  })
   // Get the id of the current element
  cur = cur[cur.length - 1]
  var id = cur && cur.length ? cur[0].id : 'home'

  console.log(id)

  if (lastId !== id) {
    lastId = id
       // Set/remove active class
    menuItems
         .parent().removeClass('active')
         .end().filter("[href='#" + id + "']").parent().addClass('active')
  }
})
