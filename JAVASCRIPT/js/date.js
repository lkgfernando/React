


function ddate() {
var ddate = new Date()
var day = ddate.getDate()
var month = (ddate.getMonth() + 1) 
var year = ddate.getFullYear()

var dDate = day + "/" + month + "/" + year


alert(dDate)

}