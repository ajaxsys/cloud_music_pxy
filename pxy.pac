function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 117.68.165.253:8080;"+ "PROXY 106.81.230.50:8118;"+ "PROXY 114.246.171.122:8118;"+ "PROXY 42.49.119.196:8118;"+ "PROXY 221.198.105.10:8118;"+ "PROXY 112.114.94.42:8118;"+ "PROXY 183.133.79.211:8118;"+ "PROXY 175.18.17.237:8118;"+ "PROXY 112.114.93.13:8118;"+
  
  "").replace(/;$/,"").split(";");
//var r=Math.floor(Math.random() * pxyList.length);
var r=0;
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

