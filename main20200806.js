var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function(x) {
        var index = $(x.currentTarget).index() //jQuery 封装好的方法可以直接获取这个元素是第几个儿子
        var n = index * (-300)
        $('#images').css({
            transform: 'translateX(' + n + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

var n = 0;
var size = allButtons.length
playSlide(n % size)
//这个方法会将找到的DOM对象自动封装成jQuery对象


//console.log(n%4) //那么就会从0~3进行循环

var timerId = setTimer()

$('.window').on('mouseenter', function() {
    window.clearInterval(timerId)
})


$('.window').on('mouseleave', function() {
    timerId = setTimer()
})

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function setTimer()
{
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 1000)
}

function activeButton($button) {
    $button
        .addClass('red')
        .siblings('.red')
        .removeClass('red')
}
