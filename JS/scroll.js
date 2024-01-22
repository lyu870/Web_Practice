$(window).on('scroll', function(){
    var scrW = $(window).scrollTop();
    
    if(scrW >= 100) {
        $('.navbar-brand').css("font-size", "20px");
    } else {
        $('.navbar-brand').css("font-size", "30px");
    }
});

/* div스크롤바 다 내리면 alert 'OK' 출력 **/
$('.lorem').on('scroll', function() {
    var scrL = $(this).scrollTop();
    var height = $('.lorem').height();
    var scrRH = document.querySelector('.lorem').scrollHeight;
    var done = 0;

    console.log(scrL, scrRH, height, done);

    if( ((scrL + height) == scrRH) && done == 0) {
        done = 1;
        alert('다 읽음');
    }
});