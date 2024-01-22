document.addEventListener('DOMContentLoaded', function () {
    var progressBar = document.getElementById('progress-bar');
    var progressBarContainer = document.getElementById('progress-bar-container');
    var isScrolling = false;

    // 스크롤 이벤트를 감지하여 진척도 업데이트
    window.addEventListener('scroll', function () {
      isScrolling = true;
    });

    // 주기적으로 스크롤 이벤트를 확인하여 진척도 업데이트
    setInterval(function () {
      if (isScrolling) {
        updateProgressBar();
        isScrolling = false;
      }
    }, 100);

    function updateProgressBar() {
      var totalHeight = document.body.scrollHeight - window.innerHeight;
      var progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = progress + '%';

      // 진척도가 0보다 크면 보이게 하고, 그렇지 않으면 숨기기
      if (progress > 0) {
        progressBarContainer.style.display = 'block';
      } else {
        progressBarContainer.style.display = 'none';
      }
    }

    // 창 크기가 변경될 때도 진척도 업데이트
    window.addEventListener('resize', function () {
      updateProgressBar();
    });
});