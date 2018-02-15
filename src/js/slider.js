import Vue from 'vue';

var Slider;

let elm = document.getElementById("slider");
if (elm) {
  Slider = new Vue({
    el: "#slider",
    name: "slider",
    data() {
      return {
        currentPage: 0
      }
    },
    methods: {
      changePage: function(page) {
        let slideList = document.getElementsByClassName("slide");
        console.log(this.currentPage);
        slideList[this.currentPage].removeAttribute("active");
        slideList[page].setAttribute("active", "");

        let dotList = document.getElementsByClassName("pager-dot");
        dotList[this.currentPage].removeAttribute("active");
        dotList[page].setAttribute("active", "");

        this.currentPage = page;
      }
    }
  });
}

export default Slider;

