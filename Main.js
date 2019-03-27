
var obj = new Array();
var arr = [];
// Creation of all the data objects required using array of objects
function init(){
	obj[0] = {
            name: 'Choice',
            title: 'Select Universe',
            value: ['Select', 'DC', 'Marvel']
        };
	obj[1] = {
			      name: 'DC',
			      title: 'Select a category',
			      value: ['Select','Gadgeteer', 'Metahuman', 'Fighters','Flighters']
			        };
	obj[2] = {
						name: 'Marvel',
						title: 'Select a cateogory',
						value: ['Select','Elementalist','Marksman','Shafeshifter','Mentalist']
						};
	obj[3] = {
						name: 'Gadgeteer',
						title: 'Select a hero',
						value: ['Select','Batman','Robin','Dick Grey']
	         };
	obj[4] = {
		        name: 'Metahuman',
						title: 'Select a hero',
						value: ['Select','Superman','Aquaman','Flash']

	         };

	obj[5] = {
						name: 'Fighters',
						title: 'Select a hero',
						value: ['Select','Green Arrow','Black Canary','Batwoman']

					 };
	obj[6] = {
			 			name: 'Flighters',
			 			title: 'Select a hero',
			 			value: ['Select','Wonder Woman','Hawk Girl','Green Latern']

			 			};
	obj[7] = {
						name: 'Elementalist',
						title: 'Select a hero',
						value: ['Select','Storm','Iceman','Magneto']

					};
	obj[8] = {
						name: 'Marksman',
						title: 'Select a hero',
						value: ['Select','Hawkeye','Captain America','Deadpool']

						};
	obj[9] = {
						name: 'Shafeshifter',
						title: 'Select a hero',
						value: ['Select','Mystique','Beast','Apocalypse']

					};

	obj[10] = {
						name: 'Mentalist',
						title: 'Select a hero',
						value: ['Select','Professor X','Jean Grey','Emma Frost']

					};
	obj[11] = {
	 					name: 'Batman',
	 					title: 'You are done',
 					  value: ['done']

	          };
	obj[12] = {
						name: 'Robin',
						title: 'You are done',
					 	value: ['done']

						 };

  obj[13] = {
			 		  name: 'Dick Grey',
			 			title: 'You are done',
			 			value: ['done']

			 			};
	obj[14] = {
						name: 'Superman',
						title: 'You are done',
						value: ['done']

						};
  obj[15] = {
						name: 'Aquaman',
					  title: 'You are done',
						value: ['done']

						};
	obj[16] = {
						name: 'Flash',
						title: 'You are done',
						value: ['done']

						};
   obj[17] = {
					   name: 'Green Arrow',
					   title: 'You are done',
					   value: ['done']

					   };
	 obj[18] = {
			 	 		 name: 'Black Canary',
			 	 		 title: 'You are done',
			 	 		 value: ['done']

			 	 		 };
	 obj[19] = {
					 	 name: 'Batwoman',
					 	 title: 'You are done',
					 	 value: ['done']

					 	  };
	 obj[20] = {
				 	 	 name: 'Wonder Woman',
				 	 	 title: 'You are done',
				 	 	 value: ['done']

				 	 	 };
	 obj[21] = {
						 name: 'Hawk Girl',
						 title: 'You are done',
						 value: ['done']

						  };
	 obj[22] = {
				 		 name: 'Green Latern',
				 		 title: 'You are done',
				 		 value: ['done']

				 		};
	 obj[23] = {
				 		 name: 'Storm',
				 		 title: 'You are done',
				 		 value: ['done']

				 		 };
		obj[24] = {
							name: 'Iceman',
							title: 'You are done',
							value: ['done']

							};
		obj[25] = {
							name: 'Magneto',
							title: 'You are done',
							value: ['done']

							};
		obj[26] = {
							name: 'Hawkeye',
							title: 'You are done',
							value: ['done']

							};
		obj[27] = {
							name: 'Captain America',
							title: 'You are done',
							value: ['done']

							};
		obj[28] = {
							name: 'Deadpool',
							title: 'You are done',
							value: ['done']

							};
		obj[29] = {
							name: 'Mystique',
							title: 'You are done',
							value: ['done']

							};
		obj[30] = {
							name: 'Beast',
							title: 'You are done',
							value: ['done']

							};
		obj[31] = {
							name: 'Apocalypse',
							title: 'You are done',
							value: ['done']

							};
		obj[32] = {
						  name: 'Professor X',
							title: 'You are done',
						  value: ['done']

							};
		obj[33] = {
						  name: 'Jean Grey',
							title: 'You are done',
							value: ['done']

							};
		obj[34] = {
					 		name: 'Emma Frost',
					 		title: 'You are done',
					 		value: ['done']

					 		};




}
// Creation of drop down dynamically
function load(){
	init();
  var obj1 = new Object();
	obj1.value = 'Choice';
  for (i=0; i< obj.length;i++)
	{
		if(obj1.value == obj[i].name )
			{
			 create_select();
			}
	}
}

function create_select(){
	var Form1 = document.createElement("form");
	var selectList = document.createElement("select");
	selectList.setAttribute("name", obj[i].name);
	selectList.setAttribute("value", obj[i].title);
	selectList.setAttribute("id", "list");
	selectList.setAttribute("onChange",'new_select(this)');
  for(var k=0;k<obj[i].value.length;k++)
		{
		var option = document.createElement("option");
		option.setAttribute("value", obj[i].value[k]);
		option.appendChild(document.createTextNode(obj[i].value[k]));
		selectList.appendChild(option);
		}
	  document.getElementById("myDiv").appendChild(selectList);
}

//To Create next child drop down dynamically as per user selection.

function new_select(temp) {
//to remove child nodes while back-tracking
	while(temp.nextSibling!=null)
			{
		  temp.parentNode.removeChild(temp.nextSibling);
		  }
	var name, title,value;
//	console.log("hello"+temp.value);
//	console.log("hello11"+temp.name);
	for(j=0;j<obj.length;j++)
		{
   	 if(obj[j].name == temp.value)
			 {
	   	  name = obj[j].name;
	   	  title = obj[j].title;
		    value = obj[j].value;
	     }
    }

		if(value != "done")
		{
     var selectList1 = document.createElement("select");
     selectList1.setAttribute("name", name);
     selectList1.setAttribute("value", title);
     selectList1.setAttribute("id", "newList");
     for(k=0;k<value.length;k++)
		    {
	 		//console.log(value.length);
 			   var option = document.createElement("option");
			//console.log(value[k]);
 				 option.setAttribute("value", value[k]);
 				 option.appendChild(document.createTextNode(value[k]));
			 //console.log("append"+value[k]);
 				 selectList1.appendChild(option);
 	      }
 document.getElementById("myDiv").appendChild(selectList1);
 selectList1.setAttribute("onChange",'new_select(this)');

    }

//Storing final user choices in an array and display it to user
	 if ( value == "done" )
	   {
      var selecChoice = document.getElementsByTagName("select");
	    for(var i=0;i<selecChoice.length-1;i++)
			   {
		  	 		arr[i] = selecChoice[i+1].name;
	       }
	    arr[i] = temp.value;
	 	  var para = document.createElement("p");
			para.setAttribute("id","result");
	    var text = document.createTextNode("Your choices are:");
	  	var text1 = document.createTextNode("Your Superhero is"+"\n");

			for(z=0;z<arr.length;z++)
				 {
					 var m = document.createElement('p');
					 m.setAttribute("id","choiceResult")
					 m.appendChild(document.createTextNode("Choice" + (z) + " :" +arr[z]));
           //form2.appendChild(m);
		 	     document.getElementById("myDiv").appendChild(m);

	       }
					para.appendChild(document.createTextNode("Your Superhero is"  + " :" +arr[2]));
					document.getElementById("myDiv").appendChild(para);
					console.log(arr[2]);
				 	img();
					createForm();

				}
}
// To display images as per user's final choice of superhero and animation
function img(){
	var imgs;
	imgs = "images/" + arr[arr.length-1] + ".jpg";
	var img1 = document.createElement("img");
	img1.setAttribute("src", imgs);
	img1.setAttribute("id", 'imgid');
	document.getElementById("myDiv").appendChild(img1);
	var pos = 0;
	var lev = 0;
	var idp = setInterval(move, 10);
	function move()
			{
				if (pos>= 10 && lev >= 280 )
				 {
						clearInterval(idp);
				 }
				else {
							if(pos<=100)
							{
								pos++;
							}
							lev++;
							img1.style.top = pos + 'px';
							img1.style.left = (lev+20) + 'px';
					  }
			}

}

//Form creation
function createForm(){

	var div = document.createElement("div");
	div.setAttribute("id", "form1");

	var finalForm = document.createElement('form');
	var Username = document.createElement("input") ;
	var inp1 = document.createElement("input");
	inp1.setAttribute("type", "text");
  inp1.setAttribute("id", "Username");
  if(window.localStorage)  // check for Local storage & cookies existence
		{
					 if(localStorage.getItem('Username'))
					 {
					   inp1.setAttribute('value',localStorage.getItem('Username'));
					 }
		}
  else
 			{
			inp1.setAttribute("value", "Username");
	 		}

	var h1 = document.createTextNode("Name:");
	finalForm.appendChild(h1);
 	finalForm.appendChild(inp1);
	var chara = document.createElement('div');
	var inp2 = document.createElement("input");
	var h2 = document.createTextNode("Hero:");
	inp2.setAttribute("type", "text");
  inp2.setAttribute("id", "chara");
	//inp2.setAttribute("value", "character");
  if(localStorage.getItem('chara'))
		{
		 inp2.setAttribute('value',localStorage.getItem('chara'));
		 }
 else
    {
	   inp2.setAttribute("value", "character");
    }
 finalForm.appendChild(h2);
 finalForm.appendChild(inp2);
 var button1 = document.createElement("input");
 button1.setAttribute("id", "button1");
 button1.setAttribute("type", "submit");
 finalForm.onsubmit = function(){
		user = document.getElementById("Username").value;
		charac = document.getElementById("chara").value;
			var name = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(user);
			var char = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(char);
			//To check the Validation for the user form
		if(user == 'Username' || charac == 'character' || user == '' || charac == '' || user == name || charac == char){
			alert('Error!!Please fill the details');
			alert('Replace the string with your values or fill the values, do not save empty form');
			return false;

		  }
	 	else {
			  var formSubmit = document.createElement('form');
				formSubmit.appendChild(document.createTextNode("Details submitted successfully"));
				if(window.localStorage){
					localStorage.setItem('chara',charac);
					localStorage.setItem('Username',user);
				 	}
				else {  // Check is cookie is enabled and retrieved
				document.cookie = "cookie_test";
				cookieEnabled = (document.cookie.indexOf("cookie_test")!=-1) ? true : false;
				//(document.cookie.indexOf("cookie_test")!=-1)?cookieEnabled=true:cookieEnabled=false;
				 // code to store form input values
				if(cookieEnabled) {
					SetCookie('Username',user);
					SetCookie('chara',charac);
					}
				else {
				alert ('Cookie not enabled for the browser !!!');
						 }
						}
					 }
	alert(" Your details are successfully Saved");
};
finalForm.appendChild(button1);
 var button2 = document.createElement("input");
 button2.setAttribute("id", "button2");
 button2.setAttribute("type", "button");
 button2.setAttribute("value", "Dont Save");
 button2.onclick = function(){
	 //reset localStorage and cookie
 if(window.localStorage){
	 localStorage.removeItem('chara');
	 localStorage.removeItem('Username');
	 }
 else{
	 DeleteCookie('Username');
	 DeleteCookie('chara');
	 }
 window.location.reload();
 };

 finalForm.appendChild(button2);
 div.appendChild(finalForm);
 //document.body.appendChild(div);
 document.getElementById("myDiv").appendChild(div);
}


   // to detect the browser and redirect
 function check() {
		if (navigator.userAgent.indexOf("Chrome") != -1) {
				 //alert('You are in Chrome');
		} else if (navigator.userAgent.indexOf("Safari") != -1) {
				 //alert('You are in Safari');
				 window.location.href = "https://www.google.com/chrome/browser/";
				  // "https://www.google.com/chrome/";
		} else if (navigator.userAgent.indexOf("Firefox") != -1) {
				 //alert('You are in Firefox');
		} else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true))
		   {
			if((navigator.userAgent.indexOf("MSIE 7.")!=-1)){
					alert('The browser you have opened is IE 7!!');
						// window.location.href="browsers.html";
				}
			else{
					alert("You are in IE Browser");

				  }
		 }
		 else {
				 alert('You are in a broswer which I dont recognise');

		 }
 }
