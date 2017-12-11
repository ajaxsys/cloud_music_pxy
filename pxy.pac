function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 219.138.58.92:3128;"+ "PROXY 182.88.151.24:8118;"+ "PROXY 111.235.158.14:808;"+ "PROXY 175.18.15.28:8118;"+ "PROXY 183.133.75.238:8118;"+ "PROXY 110.73.52.148:8123;"+
  
  "").replace(/;$/,"").split(";");
//var r=Math.floor(Math.random() * pxyList.length);
var r=0;
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

