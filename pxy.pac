function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 119.5.176.168:4386;"+ "PROXY 119.5.176.67:53979;"+ "PROXY 42.55.175.15:8118;"+ "PROXY 180.173.80.79:8118;"+ "PROXY 1.198.10.112:8118;"+ "PROXY 112.85.135.80:9999;"+ "PROXY 119.5.176.197:53979;"+ "PROXY 110.73.49.78:8123;"+ "PROXY 58.209.50.44:8118;"+ "PROXY 119.5.176.187:53979;"+ "PROXY 119.5.176.131:53979;"+ "PROXY 114.99.13.135:6890;"+
  
  "").replace(/;$/,"").split(";");
//var r=Math.floor(Math.random() * pxyList.length);
var r=0;
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

