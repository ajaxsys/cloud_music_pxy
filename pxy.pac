function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 182.38.193.227:8118;"+ "PROXY 183.189.186.209:80;"+ "PROXY 123.156.40.92:8118;"+ "PROXY 112.81.143.4:8118;"+ "PROXY 101.68.73.54:53281;"+ "PROXY 27.40.130.57:61234;"+
  
  "").replace(/;$/,"").split(";");
//var r=Math.floor(Math.random() * pxyList.length);
var r=0;
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

