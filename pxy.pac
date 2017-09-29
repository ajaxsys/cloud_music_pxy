function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
"PROXY 144.12.27.171:4382;"+ "PROXY 116.248.161.9:80;"+ "PROXY 119.190.67.51:53281;"+ "PROXY 101.68.73.54:53281;"+ "PROXY 119.5.176.89:3979;"+
  
  "").replace(/;$/,"").split(";");
var r=Math.floor(Math.random() * pxyList.length);
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

