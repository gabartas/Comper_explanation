// document.getElementById("recoButton").addEventListener("click", onAskRecommendation);

function onAskRecommendation(){
	//setTimeout(addEventExpl, 1000); //on laisse le temps de l'affichage de la recommandation
	setTimeout(addEventSExercer, 1000);
}

function addEventSExercer(){
	document.querySelectorAll('[id*="resLink_"').forEach(element => {
		element.addEventListener("click", handleSExercerClic);
	})
}

function handleSExercerClic(event){
	let id = event.currentTarget.id;

	let element = document.getElementById(id);
	element.style.backgroundColor = "#019b67";
}

//###########################################  EXPLANATIONS ###########################################

function addEventExpl(){
	//openable explanation
	document.querySelectorAll('[id*="Expl_"').forEach(element => {
			console.log("AddEventExpl() open click for ", element.id);
			element.addEventListener("click", handleOpenClickEvent);
		}
	);

	//closage explanation
	document.querySelectorAll('[id*="CloseExpl_"').forEach(element => {
			console.log("AddEventExpl() close click for ", element.id);
			element.addEventListener("click", handleCloseClickEvent);
		}
	)

	//dragable explanation message
	document.querySelectorAll('[id*="MessageExpl_"').forEach(element => {
			console.log("AddEventExpl() dragable for ", element.id);
			//dragElement(element);
		}
	)
	
}

function handleOpenClickEvent(event){
	console.log("handleOpenClickEvent() id : ", event.currentTarget.id);
	let id = event.currentTarget.id;
	hideShowExplicationMessage(id);
}

function handleCloseClickEvent(event){
	console.log("handleCloseClickEvent() id :", event.currentTarget.id);
	let id = event.currentTarget.id.split("Close")[1];
	hideShowExplicationMessage(id);
}

function hideShowExplicationMessage(id){
	console.log("hideShowExplicationMessage() id :", id)
	let explMessage = document.getElementById("Message"+id);
	let nameNodeProfile = id.split("Expl_")[1].split("-")[0];

	if(explMessage != null){
		if (explMessage.style.visibility != "visible"){
			explMessage.style.visibility = "visible";
			overLineNode(nameNodeProfile);
		}else{
			explMessage.style.visibility = "hidden";
			outLineNode(nameNodeProfile);
		}
	}
}

//we had color of objective in and node in the profile
function overLineNode(nameNodeProfile){
	console.log("changing profile element $="+nameNodeProfile);

	let elementProfile = document.querySelectorAll('[id$="'+nameNodeProfile+'"')[0];

	elementProfile.style.fontColor = "#ffffff";
	elementProfile.style.fontWeight = "3000";
	elementProfile.style.backgroundColor = "#777777";
}

//we remove color of objective in and node in the profile
function outLineNode(nameNodeProfile){
	let elementProfile = document.querySelectorAll('[id$="'+nameNodeProfile+'"')[0];

	console.log("changing profile element ", elementProfile.id);

	elementProfile.style.fontColor = "";
	elementProfile.style.fontWeight = "";
	elementProfile.style.backgroundColor = "";
}

//######################################  DRAGGABLE MESSAGE ######################################

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
}

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }