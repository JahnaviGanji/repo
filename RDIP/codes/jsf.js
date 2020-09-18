var text ='{"eng":['+'{"a":"John ate an apple before afternoon" ,"b": "some students like to study in the night" , "c":"John and Mary went to church" , "d":"John went to church after eating" , "e":"did he go to market" , "f":"the woman who called my sister sells cosmetics" , "g":"John goes to the library and studies" , "h":"John ate an apple so did she" , "i":"the teacher returned the book after she noticed the error" , "j":"I told her that I bought a book yesterday"},'+
'{"a":"before afternoon John ate an apple" ,"b": "in the night some students like to study" , "c":"Mary and John went to church" , "d":"after eating John went to church" , "e":"he did go to market" , "f":"the woman who sells cosmetics called my sister" , "g":"John studies and goes to the library" , "h":"she ate an apple so did John" , "i":"the teacher noticed the error after she returned the book" , "j":"I told her yesterday that I bought a book"},'+
'{"a":"John before afternoon ate an apple" ,"b": "none" , "c":"none" , "d":"John after eating went to church" , "e":"none" , "f":"my sister who sells cosmetics called the woman" , "g":"none" , "h":"none" , "i":"after the teacher returned the book she noticed the error" , "j":"yesterday I told her that I bought a book"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none" , "f":"my sister who called the woman sells cosmetics" , "g":"none" , "h":"none" , "i":"after the teacher noticed the error she returned the book" , "j":"I bought a book that I told her yesterday"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none" , "f":"none" , "g":"none" , "h":"none" , "i":"she returned the book after the teacher noticed the error" , "j":"I bought a book yesterday that I told her"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none" , "f":"none" , "g":"none" , "h":"none" , "i":"she noticed the error after the teacher returned the book" , "j":"yesterday I bought a book that I told her"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none" , "f":"none" , "g":"none" , "h":"none" , "i":"after she returned the book the teacher noticed the error" , "j":"none"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none", "f":"none" , "g":"none" , "h":"none", "i":"after she noticed the error the teacher returned the book" , "j":"none"}]}';
  var texth = '{"hindi":['+'{"a":"राम और श्याम बाजार गयें","b":"राम सोया और श्याम भी","c":"मैंने उसे बताया कि राम सो रहा है","d":"राम खाकर सोया","e":"बिल्लियों को मारकर कुत्ता सो गया","f":"एक लाल किताब वहाँ है","g":"एक बड़ी सी किताब वहाँ है"},'+
'{"a":"राम और श्याम गयें बाजार","b":"श्याम सोया और राम भी","c":"मैंने उसे बताया कि सो रहा है राम","d":"खाकर राम सोया","e":"मारकर बिल्लियों को कुत्ता सो गया","f":"एक लाल किताब है वहाँ","g":"एक बड़ी सी किताब है वहाँ"},'+
'{"a":"बाजार गयें राम और श्याम","b":"सोया श्याम और राम भी","c":"उसे मैंने बताया कि राम सो रहा है","d":"राम सोया खाकर","e":"बिल्लियों को मारकर सो गया कुत्ता","f":"वहाँ है एक लाल किताब","g":"बड़ी सी एक किताब वहाँ है"},'+
'{"a":"गयें बाजार राम और श्याम","b":"सोया राम और श्याम भी","c":"उसे मैंने बताया कि सो रहा है राम","d":"खाकर सोया राम","e":"मारकर बिल्लियों को सो गया कुत्ता","f":"है वहाँ एक लाल किताब","g":"बड़ी सी एक किताब है वहाँ"},'+
'{"a":"none","b":"none","c":"मैंने बताया उसे कि राम सो रहा है","d":"सोया राम खाकर","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"none","g":"वहाँ है एक बड़ी सी किताब"},'+
'{"a":"none","b":"none","c":"मैंने बताया उसे कि सो रहा है राम","d":"सोया खाकर राम","e":"कुत्ता सो गया मारकर बिल्लियों को","f":"none","g":"वहाँ है बड़ी सी एक किताब"},'+
'{"a":"none","b":"none","c":"उसे बताया मैंने कि राम सो रहा है","d":"none","e":"सो गया कुत्ता बिल्लियों को मारकर","f":"none","g":"है वहाँ एक बड़ी सी किताब"},'+
'{"a":"none","b":"none","c":"उसे बताया मैंने कि सो रहा है राम","d":"none","e":"सो गया कुत्ता मारकर बिल्लियों को","f":"none","g":"है वहाँ बड़ी सी एक किताब"},'+
'{"a":"none","b":"none","c":"बताया मैंने उसे कि राम सो रहा है","d":"none","e":"none","f":"none","g":"none"},'+
'{"a":"none","b":"none","c":"बताया मैंने उसे कि सो रहा है राम","d":"none","e":"none","f":"none","g":"none"},'+
'{"a":"none","b":"none","c":"बताया उसे मैंने कि राम सो रहा है","d":"none","e":"none","f":"none","g":"none"},'+
'{"a":"none","b":"none","c":"बताया उसे मैंने कि सो रहा है राम","d":"none","e":"none","f":"none","g":"none"}]}';
 var total=["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"];
var totalh=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"  ,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"];
 var rnd = Math.floor(Math.random()*10); 
       var line = JSON.parse(text);
       var rnds = Math.floor(Math.random()*7);
         var lines = JSON.parse(texth);
       var e = total[rnd];
       var h = totalh[rnds];
       var r;
       var c = 0;
     var g = 0; 
        function GetSelectedTextValue(language) {
        var lang = language.value;
        if(lang == "1"){
          alert("Select language");
          return false;
        }
        if(lang == "2"){
          document.getElementById("demo").innerHTML = "Form a sentence(Declarative or Interrogative or any other type) from the given words";
      document.getElementById("dem").innerHTML = "(select the buttons in proper order)"
      document.getElementById("input").innerHTML = "";
       r=2;
       if(g == 1){
          alert("please reload the page and select language");
         return false; 
       }
       else{
       sentence(e);
     } 
        }
        if(lang == "3"){
           
           document.getElementById("demo").innerHTML = "Form a sentence(Declarative or Interrogative or any other type) from the given words";
      document.getElementById("dem").innerHTML = "(select the buttons in proper order)"
      document.getElementById("input").innerHTML = "";
        r = 3;
       if(g == 1){
        
        alert("please reload the page and select language");
       return false; 
           }
       else{
       sentenceh(h); }
        }
           } 
            var str = e.split(" ");
   var suf = shuffle(str);
   var l = suf.length;
   var z = 0;
   function sentence(sen){
  document.getElementById("o1").style.visibility="hidden";
  document.getElementById("o2").style.visibility="hidden";
   document.getElementById("o3").style.visibility="hidden";
    document.getElementById("op2").innerHTML="";
    document.getElementById("op4").innerHTML="";
    buttons(suf ,l);
    }
     var strh = h.split(" ");
   var sufh = shuffle(strh);
   var lh = sufh.length;
    function sentenceh(sen){
  document.getElementById("o1").style.visibility="hidden";
  document.getElementById("o2").style.visibility="hidden"
   document.getElementById("o3").style.visibility="hidden";
   document.getElementById("op2").innerHTML="";
    document.getElementById("op4").innerHTML="";
    buttonsh(sufh ,lh);
    }
    function buttons(suff,le){
      g = 1;
      document.getElementById("op2").innerHTML="";
    document.getElementById("op4").innerHTML="";
    for (i =0;i<le;i++){
                        var b = suff[i]
                       var btn = document.createElement("button");
                       var t = document.createTextNode(suff[i]);
                        btn.id='b'+i;
                       btn.appendChild(t);
                       document.body.appendChild(btn);
                    btn.addEventListener('click', function(suff , le){
                        document.getElementById("op1").innerHTML = "Formed Sentence(after selecting words)" ;
          
    document.getElementById("op2").innerHTML+=this.innerHTML+" ";
    this.style.display="none";
     document.getElementById("o1").style.visibility="visible";
     correct();
 });}
 }
  function buttonsh(suff,le){
    g = 1;
    document.getElementById("op2").innerHTML="";
    document.getElementById("op4").innerHTML="";
    for (i =0;i<le;i++){
                        var b = suff[i]
                       var btn = document.createElement("button");
                       var t = document.createTextNode(suff[i]);
                        btn.id='b'+i;
                       btn.appendChild(t);
                       document.body.appendChild(btn);
                    btn.addEventListener('click', function(suff , le){
                        document.getElementById("op1").innerHTML = "Formed Sentence(after selecting words)" ;
          
    document.getElementById("op2").innerHTML+=this.innerHTML+" ";
    this.style.display="none";
     document.getElementById("o1").style.visibility="visible";
      correcth();
    
 });}
    }
 function change(){
  
    alert("please reload the page and select language"); 
 
   if(r == 2){
  for(i=0;i<l;i++)
  {   if(document.getElementById('b'+i).style.display!="none"){
        document.getElementById('b'+i).style.visibility="hidden";
    }   
  }sentence(e); 
} 
   if(r == 3){
  for(i=0;i<l;i++)
  {   if(document.getElementById('b'+i).style.display!="none"){
        document.getElementById('b'+i).style.display="null";
    }   
  }sentenceh(h); 
} 
 }  
function reform(){  
 c = 0; 
  if(r == 2){
  document.getElementById("op2").innerHTML = " ";
  document.getElementById("op1").innerHTML = " " ;
  document.getElementById("o2").style.visibility="hidden";
   document.getElementById("o3").style.visibility="hidden";
   document.getElementById("op4").innerHTML = " ";
    document.getElementById("op5").innerHTML = " ";
      for(i=0;i<l;i++)
  {   if(document.getElementById('b'+i).style.display=="none")
    {
   document.getElementById('b'+i).style.display="inline";
      }
    }
     
   for(i=0;i<l;i++)
  { 
     if(document.getElementById('b'+i).style.display=="none"){
    c = c+1;
      }
    } 
var p;
 p = (l * (l + 1)) / 2 ;
   if(c == p){
       document.getElementById("o2").style.visibility="visible";
    }  }
    if(r == 3){
      document.getElementById("op2").innerHTML = " ";
      document.getElementById("op1").innerHTML = " " ;
      document.getElementById("o2").style.visibility="hidden";
   document.getElementById("o3").style.visibility="hidden";
   document.getElementById("op4").innerHTML = " ";
      for(i=0;i<lh;i++)
  {   if(document.getElementById('b'+i).style.display=="none")
    {
   document.getElementById('b'+i).style.display="inline";
      }
    }document.getElementById("o2").style.visibility="hidden";
     for(i=0;i<lh;i++)
  { 
     if(document.getElementById('b'+i).style.display=="none"){
    c = c+1;
      }
    } 
var p;
 p = (lh * (lh + 1)) / 2 ;
   if(c == p){
       document.getElementById("o2").style.visibility="visible";
       
    } 
  }
    }
    function correct(){
     for(i=0;i<l;i++)
  { 
     if(document.getElementById('b'+i).style.display=="none"){
    c = c+1;
      }
    } 
var p;
 p = (l * (l + 1)) / 2 ;
   if(c == p){
       document.getElementById("o2").style.visibility="visible";
       
    }

  }
  function correcth(){
     for(i=0;i<lh;i++)
  { 
     if(document.getElementById('b'+i).style.display=="none"){
    c = c+1;
      }
    } 
var p;
 p = (lh * (lh + 1)) / 2 ;
   if(c == p){
       document.getElementById("o2").style.visibility="visible";
    }
  }
  function find(){
    var f = 0;
    var st = document.getElementById("op2").innerHTML;
     var ss = st.replace(/^\s+/g, '');
    s = ss.replace(/\s+$/, '');
   /* var s = st.replace(/\s+$/, '');  */
    if(r == 2){
      if(rnd == 0){
   for(i = 0;i<7;i++){
    if(line.eng[i].a == s){
       f = f+1;
    } } }
     if(rnd == 1){
   for(i = 0;i<7;i++){
    if(line.eng[i].b == s){
       f = f+1;
    } } }
     if(rnd == 2){
   for(i = 0;i<7;i++){
    if(line.eng[i].c == s){
       f = f+1;
    } } }
     if(rnd == 3){
   for(i = 0;i<7;i++){
    if(line.eng[i].d == s){
       f = f+1;
    } } }
     if(rnd == 4){
   for(i = 0;i<7;i++){
    if(line.eng[i].e == s){
       f = f+1;
    } } 
  } if(rnd == 5){
   for(i = 0;i<7;i++){
    if(line.eng[i].f == s){
       f = f+1;
    } } }
     if(rnd == 6){
   for(i = 0;i<7;i++){
    if(line.eng[i].g == s){
       f = f+1;
    } } }
     if(rnd == 7){
   for(i = 0;i<7;i++){
    if(line.eng[i].h == s){
       f = f+1;
    } } }
     if(rnd == 8){
   for(i = 0;i<7;i++){
    if(line.eng[i].i == s){
       f = f+1;
    } } }
     if(rnd == 9){
   for(i = 0;i<7;i++){
    if(line.eng[i].j == s){
       f = f+1;
    } } }   
         
     if(f == 1){
       document.getElementById("op4").innerHTML="<span style='color:green;font-style:bold;font-size:35px'>Right answer!!!</span>"
      } 
     else{
      document.getElementById("o3").style.visibility="visible";
      document.getElementById("o3").innerHTML="Get Correct Sentence";
       document.getElementById("op5").innerHTML="";
        document.getElementById("op4").innerHTML="<span style='color:red;font-style:bold;font-size:35px'>Wrong answer!!!</span>"
     }
   } 
  if(r == 3){
      if(rnds == 0){
   for(i = 0;i<11;i++){
    if(lines.hindi[i].a == s){
       f = f+1;
    } } }
    if(rnds == 1){
   for(i = 0;i<11;i++){
    if(lines.hindi[i].b == s){
       f = f+1;
    } } }
    if(rnds == 2){
   for(i = 0;i<11;i++){
    if(lines.hindi[i].c == s){
       f = f+1;
    } } }
 if(rnds == 3){
   for(i = 0;i<11;i++){
    if(lines.hindi[i].d == s){
       f = f+1;
    } } }
 if(rnds == 4){
   for(i = 0;i<11;i++){
    if(lines.hindi[i].e == s){
       f = f+1;
    } } }
 if(rnds ==5){
   for(i = 0;i<11;i++){
    if(lines.hindi[i].f == s){
       f = f+1;
    } } }
 if(rnds == 6){
   for(i = 0;i<11;i++){
    if(lines.hindi[i].g == s){
       f = f+1;
    } } }
        
     if(f == 1){
       document.getElementById("op4").innerHTML="<span style='color:green;font-style:bold;font-size:35px'>Right answer!!!;</span>"
      } 
     else{
      document.getElementById("o3").style.visibility="visible";
      document.getElementById("o3").innerHTML="Get Correct Sentence";
       document.getElementById("op5").innerHTML="";
        document.getElementById("op4").innerHTML="<span style='color:red;font-style:bold;font-size:35px'>Wrong answer!!!;</span>"
     }
  } f = 0;
    
    }
     var x = 0;
    var y = 0;
    function final(){
      if(r == 2){
              if(rnd == 0){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<3;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].a+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<3;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].a+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 1){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].b+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].b+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 2){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].c+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].c+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 3){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<3;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].d+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<3;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].d+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 4){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].e+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].e+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 5){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<4;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].f+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<4;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].f+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 6){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].g+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].g+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 7){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].h+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<2;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].h+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 8){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<8;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].i+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<8;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].i+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnd == 9){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<6;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].j+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<6;i++)
  { 
   document.getElementById("op5").innerHTML+=line.eng[i].j+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
   } 
if(r == 3){
if(rnds == 0){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<4;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].a+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<4;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].a+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnds == 1){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<4;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].b+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<4;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].b+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnds == 2){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<12;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].c+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<12;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].c+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnds == 3){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<6;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].d+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<6;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].d+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnds == 4){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<8;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].e+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<8;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].e+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnds == 5){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<4;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].f+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<4;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].f+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }
    if(rnds == 6){
    if(document.getElementById("o3").innerHTML=="Get Correct Sentence")
    {
       for(i = 0;i<8;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].g+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence" ;
   x =1; } }
else if(x == 1){
  document.getElementById("op5").innerHTML=""
   document.getElementById("o3").innerHTML="Get Answers";
   y =1;
   x = 0;}
else if(document.getElementById("o3").innerHTML=="Get Answers"){
   for(i=0;i<8;i++)
  { 
   document.getElementById("op5").innerHTML+=lines.hindi[i].g+'<br>';
   document.getElementById("o3").innerHTML="Hide the correct Sentence"; 
   y =0;
   x = 1; } } }

 } 
  }
    
  function shuffle(a){
    var  j,i,temp;
    for(i = a.length-1;i>0;i--){
      j= Math.floor(Math.random()*(i+1));
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }