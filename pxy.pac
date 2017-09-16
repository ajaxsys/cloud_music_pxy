function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 221.233.62.43:808;"+ "PROXY 219.149.46.151:3129;"+ "PROXY 61.166.188.82:8118;"+ "PROXY 175.8.231.248:80;"+ "PROXY 111.155.116.235:8123;"+ "PROXY 139.211.114.17:8118;"+ "PROXY 60.5.205.164:8118;"+ "PROXY 106.44.80.87:8118;"+ "PROXY 101.67.56.4:80;"+ "PROXY 218.10.162.155:80;"+ "PROXY 222.141.11.147:8118;"+ "PROXY 123.146.103.21:65103;"+ "PROXY 27.37.14.175:80;"+
  
  "").replace(/;$/,"").split(";");
var r=Math.floor(Math.random() * pxyList.length);
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

