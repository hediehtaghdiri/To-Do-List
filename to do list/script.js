const InpoutBox=document.getElementById("input-box");
const ListContiner =document.getElementById("list-container");
//==eleman haro az safe migirim
function addtask(){
   if(InpoutBox.value==""){
    alert("you must write something !")
   }
   else{
    let li=document.createElement("li")
    li.innerHTML=InpoutBox.value;
    ListContiner.appendChild(li);
    let span=document.createElement("span")
    span.innerText="\u00d7"
    li.appendChild(span)

   }
   InpoutBox.value=""
   saveData()

}
//==tabe aval baray ijad li ha va dokme hazf==
ListContiner.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }

},false)
//==zamani ke mikhaim ba refresh web hamechi apdeit nashe====
function saveData(){
    localStorage.setItem("data",ListContiner.innerHTML);
}
//==aval yek tabe minvisim ke data ro begire ===
function showList(){
    ListContiner.innerHTML=localStorage.getItem("data")
}
showList()
//====dr nahayt yek tabe minvisim ke data ro b web befreste v on ro negah dare==
