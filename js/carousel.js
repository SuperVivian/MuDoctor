/*
 *轮播图特效
 *日期：2020年12月25日
 *姓名：风微微 
 * 
 */
(function() {
    var carousel_list = document.getElementById("carousel_list");
    var left_btn = document.getElementById("left_btn");
    var right_btn = document.getElementById("right_btn");
    var circle_ol = document.getElementById("circle_ol");
    var circle_list = circle_ol.getElementsByTagName("li");

    //clone第1个li
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    carousel_list.appendChild(clone_li);

    //idx就是当前显示的图片的索引
    var idx = 0;

    right_btn.onclick = function() {
        carousel_list.style.transition = "transform .5s ease 0s";
        idx++;
        carousel_list.style.transform = "translateX(" + (-16.66) * idx + "%)";
        if (idx == 5) {
            setTimeout(() => {
                carousel_list.style.transition = "none";
                carousel_list.style.transform = "none";
            }, 500);
            idx = 0;
        }
        setCircles();
    }
    left_btn.onclick = function() {
        if (idx == 0) {
            carousel_list.style.transition = "none";
            idx = 4;
            //小技巧：如果瞬间加上，相当于没加没去
            setTimeout(() => {
                carousel_list.style.transition = "transform .5s ease 0s";
                carousel_list.style.transform = "translateX(" + (-16.66) * 4 + "%)";

            }, 0);
        } else {
            idx--;
            carousel_list.style.transform = "translateX(" + (-16.66) * idx + "%)";
        }
        setCircles();
    }
    circle_ol.onclick = function(e) {
        if (e.target.tagName.toLowerCase() == "li") {
            var n = Number(e.target.getAttribute('data-n'));
            idx = n;
            carousel_list.style.transform = "translateX(" + (-16.66) * idx + "%)";
            setCircles();
        }
    }

    //设置小圆点在谁身上，序号为idx的小圆点才有current类名
    function setCircles() {
        for (var i = 0; i < circle_list.length; i++) {
            circle_list[i].className = "";
        }
        circle_list[idx].className = "current";
    }

})();