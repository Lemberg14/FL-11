let str ='Rs. 6,67,000';
function reset (str) {
  let re = str.replace(/\D/g, '');
  console.log(re);
} 
reset(str);


function showFormattedDate(date) {
    let monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December' ];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  console.log(showFormattedDate(new Date()));



let dat1 = new Date('03/18/2016');
let dat2 = new Date('04/19/2016');
function daysBetween (dat1, dat2) {
    let time = Math.abs(dat2.getTime() - dat1.getTime());
    let days = Math.ceil(time / (1000 * 60 * 60 * 24)); 
    console.log(days);
}
daysBetween(dat1, dat2);