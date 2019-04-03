(function($){
  $(function(){

    $('.sidenav').sidenav();

    $.get("rest", function (result) {
      $(".container .section .row").empty()
      for (var val in result) {
        console.log(val);
        text = `<div class="col s12 m4 center">`
        if (result[val] === "true") {
          text += `<div class="card hoverable waves-effect waves-light orange">
                    <div class="card-content white-text">
                      <span class="card-title"> 座位序号 ${val} </span>
                        <p class="light"> 目前可以预约 </p>
                    </div>
                    <div class="card-action">
                      <a class="orange-text text-lighten-3" href="#">立即预约</a>
                    </div>
                  </div>`
        } else {
          text += `<div class="card waves-effect grey lighten-2">
                    <div class="card-content grey-text">
                      <span class="card-title"> 座位序号 ${val} </span>
                      <p class="light"> 目前无法预约 </p>
                    </div>
                    <div class="card-action">
                      <a class="grey-text" href="#">立即预约</a>
                    </div>
                  </div>`
        }
        text += `</div>`
        $(".container .section .row").append(text);
      };
    });




  }); // end of document ready
})(jQuery); // end of jQuery name space
