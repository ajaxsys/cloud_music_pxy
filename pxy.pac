function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 114.228.14.7:8118;"+ "PROXY 122.237.104.144:80;"+ "PROXY 175.163.253.12:8118;"+ "PROXY 183.189.114.218:80;"+ "PROXY 101.22.49.13:8118;"+ "PROXY 14.112.35.226:8118;"+ "PROXY 116.54.250.210:4370;"+ "PROXY 119.29.158.87:80;"+ "PROXY 221.198.105.220:8118;"+ "PROXY 60.220.16.10:8118;"+
  
  "").replace(/;$/,"").split(";");
//var r=Math.floor(Math.random() * pxyList.length);
var r=0;
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

