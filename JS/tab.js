function openTab(i) {
    $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
}

/* 탭 눌렀을때 동작 1 **/
for (let i = 0; i < 3; i++) {
    $('.tab-button').eq(i).on('click', function() {
        openTab(i);
    });
}
// ↓ for반복문은 코드를 반복실행하는 용도. Tab기능 만들때 좋음.
// for문을 사용할 때 let을 사용해야 for문 안에서 동작합니다. var은 for문 바깥에 생성.


/* 탭 눌렀을 때 동작 2 **/
// $('.list').on('click', function(e){
//     if(e.target == document.querySelectorAll('.tab-button')[0]) {
//         openTab(0);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[1]) {
//         openTab(1);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[2]) {
//         openTab(2);
//     }
// })

// /* 버튼1 탭 눌렀을때 동작**/
// $('.tab-button').eq(1).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// /* 버튼2 탭 눌렀을때 동작**/
// $('.tab-button').eq(2).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// 지금누른것을 확인하는것 = e.target