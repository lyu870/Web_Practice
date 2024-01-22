/* 모달창 토글**/
$('#login').on('click', function () {
    $('.black-bg').addClass('show-modal');
})

$('#close').on('click', function () {
    $('.black-bg').removeClass('show-modal');
})

$('.black-bg').on('click', function (e) {
    if (e.target == this) {
        $('.black-bg').removeClass('show-modal');
    }
});

$('.black-bg').on('click', function(e){
    if (e.target == '.black-bg') {
        $('.black-bg').removeClass('show-modal');
    }
})