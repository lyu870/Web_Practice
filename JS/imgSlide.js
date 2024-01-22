var slide = 1;

/* 캐러셀 (이미지 슬라이드 버튼)**/
{
    $('.slide-1').on('click', function() {
        if (slide == 2 || 3) {
            $('.slide-container').css('transform', 'translateX(0vw)');
        } slide = 1;
    });  

    $('.slide-2').on('click', function() {
        if (slide == 1 || 3) {
            $('.slide-container').css('transform', 'translateX(-100vw)');
        } slide = 2;
    });
    
    $('.slide-3').on('click', function() {
        if (slide == 1 || 2) {
            $('.slide-container').css('transform', 'translateX(-200vw)');
        } slide = 3;
    });

    $('.previous-slide').on('click', function() {
        if (slide == 1) {
            slide = 4;
            $('.slide-container').css('transform',
            'translateX(-'+ (slide-2) + '00vw)');
            slide -= 1;
        } else {
            $('.slide-container').css('transform',
            'translateX(-'+ (slide-2) + '00vw)');
            slide -= 1;
        }
    }); 

    $('.next-slide').on('click', function() {
        if (slide == 3) {
            slide = 0;
            $('.slide-container').css('transform', 'translateX(-'+ slide + '00vw)');
            slide += 1;
        } else {
            $('.slide-container').css('transform', 'translateX(-' + slide + '00vw)');
        slide += 1;
        }
        
    }); 
}