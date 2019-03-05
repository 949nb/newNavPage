var keys = {
    0: {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    1: {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    2: {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
}
var hush = {
    'q':'qq.com',
    'w':'weibo.com',
    'e':'ele.me',
    'r':'renren.com',
    't':'tianya.com',
    'y':'yy.com',
    'u':'uc.com',
    'i':'imac.com',
    'o':'opera.com',
    'p':'undefined',
    'a':'acfun.tv',
    's':'sohu.com',
    'z':'zhihu.com'
}

for(i=0;i<keys.length;i++){//初始化html
    var div1 = document.createElement('div');
    main.appendChild(div1);
    var index = keys[i];
    for(b=0;b<index.length;b++){
        var kbds = document.createElement('kbd');
        div1.appendChild(kbds);
        kbds.textContent = index[b];
        
    }
}
document.onkeypress = function(x){//监听键盘的事件
        var theKey = x.key
        var url = hush[theKey]
        window.open('http://'+url,'_blank')
}