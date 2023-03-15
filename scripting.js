const top1=document.getElementById("top");
const inputype=top1.firstElementChild;
const btn=(inputype.nextElementSibling);
let checkedlist=document.getElementById("list");
let arr=document.getElementById("list").getElementsByTagName("input");
const btnn=document.getElementById("removeall");
const btn2=document.getElementById("completeall");

//To check whether text box is empty or not, if text is enter add button should pop up
let inputvalue="";
inputype.addEventListener("keydown",function(e)
{
	if(e.keyCode!=8)
	{
	 inputvalue+=e.key;
	}
	else
	{
		inputvalue=inputvalue.slice(0,inputvalue.length-1)
	}
		inputype.nextElementSibling.style.display="inline-block";
		
		if(e.keyCode==8 && inputvalue=="")
		{
			inputype.nextElementSibling.style.display="none";
		}		
});


// to add a task when button is clicked,add event listener on checkbox and delete button
btn.addEventListener("click",function()
{
	let idOfCheckbox="check"+(arr.length+1);
	let l1=document.createElement("li");
	let c1=document.createElement("INPUT");
	c1.setAttribute("type","checkbox");
	c1.setAttribute("name","check1");
	c1.setAttribute("id",idOfCheckbox);
	c1.setAttribute("onclick","onCheck(event)");
	let b1=document.createElement("button");
	let lab=document.createElement("label")	
	b1.innerText="x";
	b1.setAttribute("onclick","removeItem(event)")
	lab.setAttribute("for",idOfCheckbox);
	lab.innerText=inputype.value;
	l1.appendChild(c1);
	l1.appendChild(lab);
	l1.appendChild(b1);
	checkedlist.appendChild(l1);
     inputype.value="";
     inputype.nextElementSibling.style.display="none";
});

//Check and Uncheck checkbox
function onCheck(e)
{ 
	let val=e.target.nextElementSibling;
	if(e.target.checked==false)
	{
		val.classList.remove("decor");
	}
	else
	{
		val.classList.add("decor");
	}
}
//Remove a specific task
function removeItem(e)
{
 e.target.parentNode.remove();
}
//Remove all completed task
btnn.addEventListener("click",function()
{
	let arr2=[];
	for(let i in arr)
	{
		if(arr[i].checked==true)
		{
			arr2.push(arr[i]);
		}
	}
	for(let i of arr2)
	{
		console.log(i);
		i.parentNode.remove();
		console.log("remove");

	}
});
//Check all completed task
btn2.addEventListener("click",function()
{
	for(let i of arr)
	{
		console.log(i);
		if(i.checked==false)
		{
			i.checked=true;
			i.nextElementSibling.classList.add("decor");
		}
		
	}
})

