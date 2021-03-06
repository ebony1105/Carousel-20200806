let n;
init();
let timer = setInterval(( )=> {
    makeLeave(getImage(n)).one('transitionend',function(e){
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
     n += 1;
},2000);

document.addEventListener('visibilitychange',function(e){ //关注我们是否在当前页面
    if(document.hidden){    //如果当前页面不在使用，那么轮播停止。
        window.clearInterval(timer);
    }
    else{
        timer = setInterval(( )=> {
            makeLeave(getImage(n)).one('transitionend',function(e){
                makeEnter($(e.currentTarget))
            });
            makeCurrent(getImage(n+1));
            n += 1;
        },2000);
    }
})

function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`);
}

function x(n)
{
    if(n > 4)
    {
        n = n % 4
        if( n === 0)
        {
            n =4
        }
    }  // n = 1,2,3,4
    return n;
}

function init()
{
    n = 1;
    $(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter');
}

function makeCurrent($node)
{
    $node.removeClass('enter leave').addClass('current');   //一次性删除两个类
    return $node;
}

function makeLeave($node){   // makeLeave返回的是一个undefined
    $node.removeClass('enter current').addClass('leave');
    return $node;//不写这个的话 那么上面的one这个API将会找不到
}


function makeEnter($node){
    $node.removeClass('leave current').addClass('enter');
    return $node;
}
