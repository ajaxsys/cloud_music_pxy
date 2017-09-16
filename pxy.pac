function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 183.189.118.211:80;"+ "PROXY 182.38.168.216:8118;"+ "PROXY 101.229.234.90:8118;"+ "PROXY 113.124.86.221:808;"+ "PROXY 183.47.137.6:8118;"+ "PROXY 58.246.59.59:8080;"+ "PROXY 219.149.46.151:3129;"+ "PROXY 182.35.68.87:8118;"+ "PROXY 60.24.171.165:8118;"+ "PROXY 124.135.30.131:8118;"+ "PROXY 218.10.162.155:80;"+ "PROXY 218.18.232.29:8080;"+
  
  "").replace(/;$/,"").split(";");
var r=Math.floor(Math.random() * pxyList.length);
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

