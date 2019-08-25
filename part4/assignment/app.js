function getDayOfWeek(day,lang) {
    return ['일','월','화','수','목','금','토'][day]
  }
  console.log(getDayOfWeek(0,'US'));

  getDayOfWeek(1,'KR')