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