$(document).ready(function(){
    $("#thumbs img").click(function(){
        let newSrc = $(this).attr("src");
        let newAlt = $(this).attr("alt");
        $("#lgPic").attr("src", newSrc);
        $("#lgTitle").text(newAlt);
        
});
         
        $("#lgPic").click(function(){

        let imgUrl= $(this).attr("src");
        window.open(imgUrl, "_blank");
        });
});