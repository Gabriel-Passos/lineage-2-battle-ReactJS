<html>
<head>
<body bgcolor="#000000" text="lime" link="#009933" vlink="#009933" padding="0" leftmargin="0">
<font size="2"> 
<TITLE><?php
include"connection.php";
echo  " - Live map";


?></TITLE>

<script>
<!--
//enter refresh time in "minutes:seconds" Minutes should range from 0 to inifinity. Seconds should range from 0 to 59
var limit="0:10"

if (document.images){
var parselimit=limit.split(":")
parselimit=parselimit[0]*60+parselimit[1]*1
}
function beginrefresh(){
if (!document.images)
return
if (parselimit==1)
window.location.reload()
else{ 
parselimit-=1
curmin=Math.floor(parselimit/60)
cursec=parselimit%60
if (curmin!=0)
curtime=curmin+" minutes "+cursec+" seconds to automatic refresh!"
else
curtime=cursec+" seconds to automatic refresh!"
window.status=curtime
setTimeout("beginrefresh()",1000)
}
}

window.onload=beginrefresh
//-->
</script></head>

<font color=>afd</font>