//公共请求
function ajax(type,url,ajaxdata){
  var re  =  null;
  $.ajax({
    type:type,
    dataType:'JSON',
    async: false,
    headers: {
      'Authorization':openid
    },
    url: url,
    data: ajaxdata,
    success: function(data) {
      re = data;
    },
    error: function(err) {
    },
    complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数　
    }
  });
  return re;
}

function alertMsg(msg,time){
  $('.alertMsg').remove();

  if(time){

  }else{
    time = 1500;
  }

  let dom = `<div class="alertMsg" style=" 
				            position: fixed;
                    padding: 3px 10px;
                    text-align: center;
                    zoom: 2;
                    line-height: 12px;
                    word-break: break-all;
                    overflow: hidden;
                    font-size: 8px;
                    background: #000;
                    opacity: .8;
                    color: #fff;
                    display: table;
                    margin: auto;
                    top: 40%;
                    width: 50px;
                    left: 50%;
                    margin-left: -30px;
                    z-index: 12000;
                    overflow-y: auto;">${msg}</div>`;

  $('body').append(dom);

  setTimeout(function(){
    $('.alertMsg').remove();
  },time)
}



$.extend({
  myTime:{
    CurTime: function(){
      return Date.parse(new Date())/1000;
    },
    DateToUnix: function(string) {
      var f = string.split(' ', 2);
      var d = (f[0] ? f[0] : '').split('-', 3);
      var t = (f[1] ? f[1] : '').split(':', 3);
      return (new Date(
        parseInt(d[0], 10) || null,
        (parseInt(d[1], 10) || 1) - 1,
        parseInt(d[2], 10) || null,
        parseInt(t[0], 10) || null,
        parseInt(t[1], 10) || null,
        parseInt(t[2], 10) || null
      )).getTime() / 1000;
    },
    UnixToDate: function(unixTime, isFull, timeZone) {
      if (typeof (timeZone) == 'number'){
        unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
      }
      var time = new Date(unixTime * 1000);
      var ymdhis = "";
      ymdhis += time.getUTCFullYear() + "-";
      ymdhis += (time.getUTCMonth()+1) + "-";
      ymdhis += time.getUTCDate();
      if (isFull === true){
        ymdhis += "" + time.getUTCHours() + ":";
        ymdhis += time.getUTCMinutes() + ":";
        ymdhis += time.getUTCSeconds();
      }
      return ymdhis;
    }
  }
});
