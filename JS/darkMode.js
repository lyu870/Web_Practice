/* 다크모드 라이트모드 버튼**/
var bgColorCnt = 0;
$('.badge').on('click', function(e){
    bgColorCnt++;
    if(bgColorCnt % 2 == 1) {
        $('.badge').html('Light');
    } else if(bgColorCnt % 2 == 0) {
        $('.badge').html('Dark');
    }
});