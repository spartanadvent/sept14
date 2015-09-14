document.addEventListener('DOMContentLoaded', function(){
    for(var i = 2;i < games.length - 2; i++){
        games.addEventListener('touchstart',function(){
            alert('this is touch');
        });
    }
});