function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}

var list  = document.getElementsByTagName('a');
// console.log(lis)
for(var i=0;i <= list.length; i++){
    onclick.list[i]=function(){
        showPic(this)
    }
}