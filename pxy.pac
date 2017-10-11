function FindProxyForURL(url, host) {
  
if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
  return "DIRECT";
  
var pxyList = (
  
  
<<<<<<< HEAD
"PROXY 119.5.176.168:4386;"+ "PROXY 119.5.176.67:53979;"+ "PROXY 42.55.175.15:8118;"+ "PROXY 180.173.80.79:8118;"+ "PROXY 1.198.10.112:8118;"+ "PROXY 112.85.135.80:9999;"+ "PROXY 119.5.176.197:53979;"+ "PROXY 110.73.49.78:8123;"+ "PROXY 58.209.50.44:8118;"+ "PROXY 119.5.176.187:53979;"+ "PROXY 119.5.176.131:53979;"+ "PROXY 114.99.13.135:6890;"+
=======
"PROXY 144.12.27.171:4382;"+ "PROXY 116.248.161.9:80;"+ "PROXY 119.190.67.51:53281;"+ "PROXY 101.68.73.54:53281;"+ "PROXY 119.5.176.89:3979;"+
>>>>>>> e45abdcae1a79162ebdf490a96e1d6041257ce42
  
  "").replace(/;$/,"").split(";");
//var r=Math.floor(Math.random() * pxyList.length);
var r=0;
  
if (host.indexOf("103.211.228.")>-1 || host == "music.163.com" || url.indexOf('music.126.net')>-1 ) 
  return pxyList[r]+";";

return "DIRECT";
}

