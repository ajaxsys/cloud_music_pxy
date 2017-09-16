#get proxy list
export http_proxy=
rm list_proxy
rm list_may_ok
rm list_ok

#groovy GetProxy.gv | egrep -o '[0-9]+(?:\.[0-9]+){3}:[0-9]+' > list_proxy
groovy GetProxy.gv | egrep -o '[0-9]+(?\.[0-9]+){3}:[0-9]+' > list_proxy

expect=`cat expect.txt`

#get ok proxy ( response in 1 second)
while read p; do
   export http_proxy=http://$p; 
   resp=$(curl -m 3 music.163.com/song?id=362396); 
   if [[ (! $resp =~ .*\<\/html\> ) || ( $resp =~ .*由于版权保.* ) || (! $resp =~ .*日光倾城.* )  ]]; then 
       echo "$p  NG" ;  
   else ( 
       echo "$p  OK"; 
       echo "$p" >> list_ok;

       echo $resp > $p;
       break; 
    )
   fi  
done <list_proxy

#format it to pac
echo "-------May OK------"
cat list_may_ok | sed -e 's/^/"PROXY_/g' | sed -e 's/[ ]*$/;"+/g' | sed -e 's/  */:/g' | sed 's/_/ /g'

echo "=======OK========"
result_newline=`cat list_ok | sed -e 's/^/"PROXY_/g' | sed -e 's/[ ]*$/;"+/g' | sed -e 's/  */:/g' | sed 's/_/ /g'`

echo $result_newline
result=`echo $result_newline | tr -d '\n'`


if [ "$result" == "" ]; then
    echo "NONE result!"
else
    sed -e "s/REPLACE_ME/$result/g" pxy.pac.template > pxy.pac
    git add pxy.pac
    git commit -m "update"
    git push -u origin master
fi
  

#clear
export http_proxy=
