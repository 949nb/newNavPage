var keys = {
    0: {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    1: {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    2: {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
}
var hush = {
    'q':'tencent.com',
    'w':'weibo.com',
    'e':'ele.me',
    'r':'renren.com',
    't':'youtube.com',
    'y':'yy.com',
    'u':'uc.com',
    'i':'apple.com',
    'o':'opera.com',
    'p':'jquery.com',
    'a':'zh-t.airbnb.com',
    's':'sohu.com',
    'b':'bilibili.com',
    'z':'zhihu.com'
}

for(i=0;i<keys.length;i++){
    var div1 = document.createElement('div');
    main.appendChild(div1);
    var index = keys[i];
    for(b=0;b<index.length;b++){
        var kbds = document.createElement('kbd');
        div1.appendChild(kbds);
        kbds.textContent = index[b];
        var kbdClass = index[b]
        kbds.classList.add(kbdClass)
        var icoImg = document.createElement('img')
        if(hush[kbdClass]){
            kbds.appendChild(icoImg)
            var ico = "http://"+hush[kbdClass]+"/favicon.ico"
            icoImg.setAttribute('src',ico)
        }else{
            var circle = document.createElement('div')
            kbds.appendChild(circle)
            circle.classList.add('circle')
        }
        icoImg.onerror = function(xxxxxx){
            console.log('失败的一匹')
            xxxxxx.target.src = 'https://i.loli.net/2019/03/06/5c7fad9e635da.png'
        }

        
        //设置了按钮的id
        var buttons = document.createElement('button');
        kbds.appendChild(buttons);
        buttons.textContent = '编辑'
        buttons.setAttribute('id',index[b])
        //设置哈希
        $(buttons).on('click',function(x){
            key = (x['target']['id'])
            let setUrl  = prompt('给我一个链接，我帮你设置好哦～');
            hush[key] = setUrl;
            x.stopPropagation()//阻止点击事件冒泡
            console.log(setUrl);
        })
        //点击跳转事件
        $(kbds).on('click',function(y){
            let index = y.currentTarget.className
            console.dir(index);
            let url = hush[index];
            window.open('http://'+url,'_blank');
        })
        
    }
}
//监听键盘事件
document.onkeypress = function(x){
        var url = hush[x.key];
        window.open('http://'+ url,'_blank');
}