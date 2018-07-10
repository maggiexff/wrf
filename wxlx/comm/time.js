
//秒数  转换为 天时分秒等
export function secondFormat(second) {
  // 天数位
  var day = Math.floor(second / 24 / 3600);

  // 小时位
  var hr = Math.floor((second - day * 24 * 3600) / 3600);
  // 分钟位
  var min = Math.floor((second - day * 24 * 3600 - hr * 3600) / 60);
  // 秒位
  var sec = (second - day * 24 * 3600 - hr * 3600 - min * 60); // 

  if (day > 0) {
    return setnum(day) + ' 天 ' + setnum(hr) + ":" + setnum(min) + ":" + setnum(sec);
  }
  else {
    return setnum(hr) + ":" + setnum(min) + ":" + setnum(sec);
  }

};
// 格式数字为两位  如 1 显示为01
function setnum(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
};

export function cutdownTime(nowTime, times) {
  let finishAll = true;
  let spareTime = 0;
  for (var i = 0; i < times.length; i++) {
    if (nowTime < times[i].timestart) {
      finishAll = false;
      spareTime = times[i].timestart - nowTime;
      times[i].timeShown = '距秒杀开始还有：' + secondFormat(spareTime);
      times[i].timeActive = 'bc-c';
    } else {
      if (nowTime < times[i].timeend) {
        finishAll = false;
        spareTime = times[i].timeend - nowTime;
        times[i].timeShown = '距秒杀结束还有：' + secondFormat(spareTime);
        times[i].timeActive = 'bc-danger';
      } else {
        times[i].timeShown = '秒杀已经结束';
        times[i].timeActive = 'bc-c';
      }
    }
  }
  return finishAll;
}

module.exports = {
  cutdownTime: cutdownTime,
  secondFormat: secondFormat
}
