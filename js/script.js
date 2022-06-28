document.addEventListener('DOMContentLoaded', function(){ 
    $(function(){
    $('.greeting h1').hide()
    $('.greeting h1').show(2000)
    })

    let modal = document.getElementById('myModal');
    let content = document.getElementById('myPhoto');
    let modalPhoto = document.getElementById('photo1');

    content.onclick = function(){
        modal.style.display = "block";
        modalPhoto.src = this.src;
    }

    let span = document.getElementsByClassName('close')[0];
    span.onclick = function(){
        modal.style.display = 'none'
    }
});