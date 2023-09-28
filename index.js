const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015


// Select elements
var dayjsParser = document.querySelector(".dayjs-parser");
var dayjsShow = document.querySelector(".dayjs-show");
var dayjsGet = document.querySelector(".dayjs-get");
var dayjsDo = document.querySelector(".dayjs-do");
var dayjsQuery = document.querySelector(".dayjs-query");

// Perform Day.js operations
var parsedDate = dayjs('2018-08-08');
dayjsParser.innerHTML = parsedDate.format('YYYY-MM-DD');

var formattedDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
dayjsShow.innerHTML = formattedDate;

var modifiedDate = dayjs().set('month', 3).month();
dayjsGet.innerHTML = modifiedDate;

var futureDate = dayjs().add(1, 'year');
dayjsDo.innerHTML = futureDate.format('YYYY-MM-DD HH:mm:ss');

var isBeforeNow = dayjs().isBefore(dayjs());
dayjsQuery.innerHTML = isBeforeNow ? 'Yes' : 'No';

dayjs().format()