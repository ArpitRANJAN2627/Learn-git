const addbtn=document.getElementById('addbtn');
const list=document.getElementById('list');
const inp = document.getElementById('inp');



addbtn.onclick=function (){
   if(inp.value==""){
      alert("Please add task")
      return;
   }
   const div=document.createElement('div');
   div.style.display="flex"
   div.style.justifyContent="space-between"
   div.style.width="50%"
   div.style.height="1.8rem"
   div.style.background='purple'
   div.style.margin="10px auto"
   list.append(div);
   const check=document.createElement('input');
   check.style.marginLeft="5px"
   check.style.marginTop="0.2rem"
   check.setAttribute('type','checkbox');
   div.append(check);
   const span=document.createElement('span');
   span.innerText=inp.value;
   span.style.overflow='hidden'
   span.style.marginTop="0.2rem"
   // span.style.color="white"
   div.append(span);
    check.onclick=function(){
      if(check.checked==true){
      span.style.textDecoration="line-through";
      }
      else{
         span.style.textDecoration="none";
      }
      return ;
    }
    inp.value="";
   const del=document.createElement('button');
   del.innerHTML='<i class="fa-solid fa-trash"></i>'
   div.append(del);
   del.onclick=function(){
    div.remove();
    return;
   }
 
   
}