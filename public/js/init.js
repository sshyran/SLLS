document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  refresh();

  var socket = io('', { path: '/slls/socket.io' });
  socket.on('socketToMe', function (data) {
    refresh();
  });
});

function refresh() {
  $.get("rest", function (result) {
    var text = '';
    for (var val in result) {
      text += `<div class="col s12 m4 center">`
      if (result[val] === "true") {
        text += `<div id="card_${val}" class="card hoverable waves-effect waves-light orange">
                    <div class="card-content white-text">
                      <span class="card-title"> 座位序号 ${val} </span>
                        <p class="light"> 目前可以预约 </p>
                    </div>
                    <div class="card-action">
                      <a class="orange-text text-lighten-3" href="#">立即预约</a>
                    </div>
                  </div>`
      } else {
        text += `<div id="card_${val}" class="card waves-effect grey lighten-2">
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
    };
    document.getElementById("update_section").innerHTML = text;
  });
}
