/*! ui-carousel.js © yamoo9.net, 2016 */

// -----------------------------------------
// TODO:
// -----------------------------------------
// 1. 캐러셀 컴포넌트 마크업/스타일링 (상태 디자인)
// 2. 이전/다음 캐러셀 콘텐츠 보기 기능 구현
// 3. 인디케이터 엑티베이션 (활성화 상태 표시)
// 4. 커스텀 이벤트 처리 (https://goo.gl/uUA4Xd)
// 5. 콘텐츠 뷰 자동 재생/정지 기능 구현
// 6. 플러그인 구현
// -----------------------------------------

(function(global, $){
  'use strict';

  // ui_Carousel 생성자 함수 정의
  function ui_Carousel(selector) {
    // 초기 생성자 함수의 역할
    this.$carousel          = null;
    this.$carousel_headline = null;
    this.$carousel_tablist  = null;
    this.$carousel_tabs     = null;

    // this는 생성된 ui_Carousel 객체 인스턴스
    this.init(selector);
    this.events();
  }

  // ui_Carousel.prototype 객체 정의(확장)
  ui_Carousel.prototype.init = function(selector) {
    this.$carousel          = $(selector);
    this.$carousel_headline = this.$carousel.children(':header:first');
    this.$carousel_tablist  = this.$carousel.children('ul').wrap('<div/>').parent();
    this.$carousel_tabs     = this.$carousel_tablist.find('a');
    // 역할별 스타일링 되는 클래스 설정
    this.settingClass();
    // this.settingAria();
  };

  ui_Carousel.prototype.settingClass = function() {
    this.$carousel.addClass('ui-carousel');
    this.$carousel_headline.addClass('ui-carousel-headline');
    this.$carousel_tablist.addClass('ui-carousel-tablist');
    this.$carousel_tabs.addClass('ui-carousel-tab');
  };

  ui_Carousel.prototype.events = function() {
    this.$carousel_tabs.on('click', this.viewTabpanel);
  };

  ui_Carousel.prototype.viewTabpanel = function(index) {
    // index에 해당되는 탭패널 활성화
    // 인디케이터 라디오클래스 활성화
  };

  global.ui_Carousel = ui_Carousel;

})(this, this.jQuery);