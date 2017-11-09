function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 175.171.108.227:53281;"+ "PROXY 110.201.118.23:8118;"+ "PROXY 123.132.239.106:808;"+ "PROXY 27.219.37.185:8118;"+ "PROXY 123.190.140.238:80;"+ "PROXY 120.32.208.204:8118;"+ "PROXY 101.87.85.184:8118;"+ "PROXY 171.217.2.95:8118;"+ "PROXY 221.0.235.246:8118;"+
  
  "").replace(/;$/,"").split(";");
//var r=Math.floor(Math.random() * pxyList.length);
var r=0;
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

