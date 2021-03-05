var ul = document.querySelector('#wrap ul');
var lis = document.querySelectorAll('#wrap ul li');
var closeBtns = document.querySelectorAll('#wrap .close');
var last = null;  //上一个选中的li

// 定时器，刷新0.2s后浮上来
setTimeout(function () {
    ul.className = '';
}, 200);


lis.forEach(function (li, index) {
    li.onclick = function () {
        // 添加属性
        ul.setAttribute('id', 'activeWrap');

        last && (last.className = '');

        this.className = 'active';

        last = this;  //把当前这次点击的元素赋值给last
    };

    closeBtns[index].onclick = function (ev) {
        ul.removeAttribute('id');
        lis[index].className = '';

        last = null;

        // 阻止点击添加与删除id的冒泡
        ev.cancelBubble = true;
    }
});
