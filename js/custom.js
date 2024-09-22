const uls = $(".footer-links-wrapper ul")

$(window).outerWidth() < 768 && uls.hide()
const headers = $(".footer-links-wrapper h3")

// headers.click(function (e) {
//  const current = $(this)
//  current.next().toggle(300)
//  current.toggleClass("expanded")
// })

headers.click(function (e) {
    if($(window).outerWidth() > 778) return

    // console.log($(window).width())
    // console.log($(window).innerWidth())
    // console.log($(window).outerWidth())
    
const current = $(this)
let isOpen = current.hasClass("expanded")  ? true : false

uls.hide(300)
headers.removeClass("expanded")
 
 if(!isOpen) {
    current.next().show(300)
    current.addClass("expanded")
 }

})
// nati yilishal