function FindProxyForURL(url, host) {
    if (url.indexOf(".mp3")>1 || url.indexOf(".mp4")>1 || url.indexOf(".flv")>1)
        return "DIRECT";

    if (host == 'music.163.com' || host == 'ip.ws.126.net') {
        return 'PROXY 158.199.142.239:80';
    } else if (host == 'music.httpdns.c.163.com') {
        return 'PROXY 127.0.0.1:9999';
    } else if (host == 'm10.music.126.net') {
        return 'PROXY 125.39.1.27:80';
    }
    
    if (host.indexOf("103.211.228.")>-1 || url.indexOf('music.126.net')>-1 ) 		
        return 'PROXY 125.39.1.27:80';
    
    return 'DIRECT';
}
