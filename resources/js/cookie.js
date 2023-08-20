// 쿠키 입력
function set_cookie(name, value, expirehours)
{
    var today = new Date();
    today.setTime(today.getTime() + (60*60*1000*expirehours));
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
}
 
// 쿠키 얻음
function get_cookie(name)
{
    var find_sw = false;
    var start, end;
    var i = 0;
    for (i=0; i<= document.cookie.length; i++)
    {
        start = i;
        end = start + name.length;
         if(document.cookie.substring(start, end) == name)
        {
            find_sw = true
            break
        }
    }
    if (find_sw == true)
    {
        start = end + 1;
        end = document.cookie.indexOf(";", start);
        if(end < start) end = document.cookie.length;
        return unescape(document.cookie.substring(start, end));
    }
    return "";
}
 
function setLayerPopupOpen( name ) {
   var cc_name    = get_cookie( name ); 
	
   if( !cc_name ) { 
      $('#' + name).show();
   } else{
	 $('#' + name).hide();
   }
} 
 
function setLayerPopupClose(name, expirehours) {
	
    $('#' + name).hide();
    if( expirehours > 0  ) set_cookie(name, name, expirehours);
}