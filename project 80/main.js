
var guest=[]

function submit(){
  var guest1=document.getElementById("guest1").value
  guest.push(guest1)
}
function sort(){
  document.getElementById("display_name").innerHTML=guest
  
}

/*function submit()
  var s=document.getElementById("guest1").value;
  var found=0;
var j;
for(j=0; j<names_of_people.lenght; j++)
{
  if(s==names_of_people[j]){
     }
}*/