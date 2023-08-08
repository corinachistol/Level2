 video 00016__4_ part3

 i/o mechanics schimb de date  input- output

 IO DATA STREMs
   -why?
     1.chuncking
     2.process while progressing- datele se proceseaza si incarca pe bucati, se face async, motiv pentru care trebuie de practicat promise async await



Stream - NodeJS
 fetch(), request(), response(), ...dns(), ftp(), fs()
 Readable, Writable, Mix(Read + Write) 

Event binding( start, end, data, error,... )

HTTP(S)
ClientRequest
IncomingMessage  -->Stream REadable

req = http.request(options, res => {  -> creates 0 - Stream
  res <-- I-Stream
 }) 

req.write(....)

 req.end()

req   to Client
    init         write1        write2                end
x-----|------------|--------------|    ...   ---------|---->

res
    init         read1        read2                  end
x-----|------------|--------------|    ...   ---------|---->


req to Server viceversa

 app(client) ---> request -----> Weather server API
  event <            <--- response <------  ???
 noi scrim cod (cind ,cum, unde ,ce faca acest request)