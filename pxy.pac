function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 27.159.126.12:8118;"+ "PROXY 110.183.244.125:8118;"+ "PROXY 125.211.202.26:53281;"+ "PROXY 58.246.59.59:8080;"+ "PROXY 61.173.200.2:8118;"+ "PROXY 42.231.28.193:80;"+ "PROXY 116.192.21.94:8118;"+ "PROXY 1.183.152.252:80;"+ "PROXY 139.211.114.17:8118;"+ "PROXY 39.73.123.242:65103;"+ "PROXY 123.121.25.86:8118;"+ "PROXY 101.67.56.4:80;"+ "PROXY 111.155.116.235:8123;"+
  
  "").replace(/;$/,"").split(";");
var r=Math.floor(Math.random() * pxyList.length);
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

