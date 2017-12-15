function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 182.126.176.20:8118;"+ "PROXY 113.221.44.206:8888;"+ "PROXY 125.211.202.26:53281;"+ "PROXY 122.156.250.178:80;"+ "PROXY 113.109.53.3:8118;"+ "PROXY 61.142.240.132:808;"+
  
  "").replace(/;$/,"").split(";");
//var r=Math.floor(Math.random() * pxyList.length);
var r=0;
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

