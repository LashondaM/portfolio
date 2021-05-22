window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');

    let windowPosition = window.scrollY > 40;

    nav.classList.toggle('scrolling-active', windowPosition);
})


// $(window).scroll(function(){
//     var wScroll = $(window).scrollTop();
//     console.log(wScroll)

//     $('.section2-2').css('top', + (wScroll*.005)*3+'em');

// })