/* 아이디비번입력 **/
$('form').on('submit', function(e){
    var pw = $('#pwd').val();
    if($('#id').val() == '') {
        alert('아이디 입력안하셨어요');
        e.preventDefault();
    }
    else if ($('#pwd').val() == '') {
        alert('비번 입력안하셨어요');
        e.preventDefault();
    }
    else if ($('#pwd').val().length < 6) {
        alert('비번이 짧아요');
        e.preventDefault();
    }
    else if ( /[A-Z]/.test(pw) == false ) {
        alert('비번안에 영어대문자 포함해서 입력하셔야해요');
        e.preventDefault();
    }
});