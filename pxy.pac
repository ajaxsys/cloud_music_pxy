function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 58.246.59.59:8080;"+"PROXY 115.218.85.120:80;"+"PROXY 139.211.114.17:8118;"+"PROXY 60.222.222.51:80;"+"PROXY 39.73.123.242:65103;"+"PROXY 222.141.11.147:8118;"+"PROXY 60.5.205.164:8118;"+"PROXY 123.121.25.86:8118;"+"PROXY 218.10.162.155:80;"+"PROXY 219.157.35.204:80;"+
  
  "").replace(/;$/,"").split(";");
var r=Math.floor(Math.random() * pxyList.length);
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

