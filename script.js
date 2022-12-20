var pics = [];
let inputPic;

$(".add").click(function(){
    inputPic = $(".picture-url").val();
    pics.push(inputPic);
    for (var photos of pics){
        $(".gallery").append("<img src=" + photos +">");
    }
     $(".picture-url").val('');
});