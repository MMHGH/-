let com = {
  transTime(val) {
    let myDate = new Date(val),
      year = myDate.getFullYear(),
      month = myDate.getMonth() + 1 < 10 ? '0' + Number(myDate.getMonth() + 1) : Number(myDate.getMonth() + 1),
      date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate(),
      hh = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours(),
      mm = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes(),
      ss = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds()

    return year + "-" + month + "-" + date + " " + hh + ":" + mm + ":" + ss
  },
  transTimeThree(val) {
    let myDate = new Date(val),
      year = myDate.getFullYear(),
      month = myDate.getMonth() + 1 < 10 ? '0' + Number(myDate.getMonth() + 1) : Number(myDate.getMonth() + 1),
      date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
    return year + "-" + month + "-" + date
  },
  // 获取周 开始时间
  getWeekStart(val) {
    return val.getTime() - 24*60*60*1000
  },
  // 获取周 结束时间
  getWeekEnd(val) {
    let date = (val.getTime() + 120*60*60*1000); //+ 24*60*60*1000-1;//转化为23:59:59格式
    return date
  },
  // 根据当前时间获取周开始
  getDays() {
    var now = new Date;
    var day = now.getDay();
    var week = "7123456";
    var first = 0 - week.indexOf(day);
    var f = new Date;
    f.setDate(f.getDate() + first);
    var last = 6 - week.indexOf(day);
    var l = new Date;
    l.setDate(l.getDate() + last);
    var a = [
        f, l
    ];
    // 处理格式
    var year = a[0].getFullYear(),
        month = a[0].getMonth() + 1,
        day = a[0].getDate();
    
    var formatMonth = month > 9 ? (month + "") : ("0" + month),
        formatDay = day > 9 ? (day + "") : ("0" + day);
    var formatD = year + "-" + formatMonth + "-" + formatDay; //+ " " + '00' + ":" + '00' + ":" + '00'
    return new Date(new Date(formatD).getTime()  + 24*60*60*1000);
  },
  /**
   *  获取半年时间
   *  type:1上半年 2下半年
   * */
  getHalfTime(type){
    var d = new Date(),
        year = d.getFullYear(),
        startMonth = 0,
        endMonth = 0;

      if(type == 1){
          startMonth = 1;
          endMonth = 6;
      }else{
          startMonth = 7;
          endMonth = 12;
      }
    var fristDay = new Date(year,1,1).getDate(),
        lastDay = new Date(year,6,type==1?0:31).getDate();
      
      fristDay = fristDay <10?'0'+fristDay : fristDay;
      lastDay = lastDay <10?'0'+lastDay : lastDay;
      startMonth = startMonth <10?'0'+startMonth : startMonth;
      endMonth = endMonth <10?'0'+endMonth : endMonth;
    
    //获取时间
    var halfTime = '',
        beginWhereTheTime = year + "-" + startMonth + "-" + fristDay + " " + '00' + ":" + '00' + ":" + '00',
        endWhereTheTime = year + "-" + endMonth + "-" + lastDay + " " + '23' + ":" + '59' + ":" + '59';
    
    halfTime = [beginWhereTheTime,endWhereTheTime];  
    return halfTime
  },
  /**
   * 获得月的起始日期 
   * type:'start'起 'end'始
   * */
  getMonthEnd(now,type) {
    var time = '',
        nowYear = now.getYear(),//当前年  
        nowMonth = now.getMonth();//当前月  
        nowYear += (nowYear < 2000) ? 1900 : 0;
      // 获取月份天数
    var monthStartDate = new Date(nowYear, nowMonth, 1),   
        monthEndDate = new Date(nowYear, nowMonth + 1, 1),    
        days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24);   
       
        if(type == 'start'){
          time =  new Date(nowYear, nowMonth, 1)
        }else{
          time = (new Date(nowYear, nowMonth, days).getTime()) + 24*60*60*1000-1;//转化为23:59:59格式
        }
    
    return time;   
  }
  
 }

export default com
