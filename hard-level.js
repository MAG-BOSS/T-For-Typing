var timer = document.getElementById ("timer");
var first_container = document.getElementById ("first_container");
var test_para = document.getElementById ("para_test");
var user_para = document.getElementById ("user_para");
var timeup = document.getElementById ("end_box");
var enclose = document.getElementById ("enclose");
var tryAgain = document.getElementById ("Try_Again");
var timeRem = 90;
var score = 0;
const totalTime = timeRem;

var show_para = function () {
    test_para.innerHTML = para;
};

var calcSpeed = function () {
    var words = user_para.value.split(" ").length;
    return (words * 60.0) / totalTime;
};

var start_timer = function () {
    var get_time = setInterval (function () {
        timeRem--;
        timer.innerHTML = "Time Rem: " + timeRem + "sec";
        if (timeRem == 0) {
            clearInterval (start_timer);
            user_para.remove();
            first_container.remove ();
            enclose.remove ();
            timer.remove ();
            document.body.appendChild (timeup);
            document.getElementById ("score").innerHTML = "Speed: " + calcSpeed() + " words per minute";
            timeup.style.display = "block";
        }
    }, 1000);
    user_para.removeEventListener ("keydown", start_timer);
};

var start = function () {
    timer.innerHTML = "Time Rem: " + timeRem + "sec";
    test_para.value = "";
    show_para ();
    user_para.addEventListener ("keydown", start_timer);
};

var para = " Hey,welcome buddy, typep afhjkl episom wehfjk knwkndk kndwncl nelwk lkcnw eknew kdnd dknen slknskwn 23//???{{ kenwkdend dkdnenew %%%78** kdwnnclnkvnrvlekvvn kn fknrfk knfekn oewiu reifihe pwqo ncdcoe liwnxkdj xbncm nmcbc kdhe odjodjeod odhoedh kndekdn kndekn edknkdne dknekdn cnicnwak cjbwbcwbe cbbc wbibdweibd dbdbd dbib hudkfhk kdkfkf dknknd afhjkl episom wehfjk knwkndk kndwncl nelwk lkcnw eknew afhjkl episom wehfjk knwkndk kndwncl nelwk lkcnw eknew irifnn ksdcklcd rnihr iafin fnrrnf ediei enwfn wkldnk fvvm 46466 6499 66161 :::>> rfrfr ????}[] hfrhfi vhj $$yfyf## jbjrbfjrf jfbfrjfb fbrjf jbfj frfrifrr jrr vvbrrv rv rvrvj rv rvjk vj vjbvj vjkv v v  "
start ();

tryAgain.addEventListener ("click", function (){
    window.location.reload ();
});