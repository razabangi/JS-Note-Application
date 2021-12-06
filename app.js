function getId(data){
    return document.getElementById(data);
}

function getClass(data){
    return document.getElementsByClassName(data);
}

function create(e) {
    let title = getId("title");
    let dummyTitle = getId("dummy-title");    
    let desc = getId("desc");
    let dummyDesc = getId("dummy-desc");
    if (title.value == "") {
        let descError = getId("desc-error");
        descError.innerHTML = "";
        descError.classList.remove("text-danger");
        let titleError = getId("title-error");
        titleError.innerHTML = "Title field is required.";
        titleError.classList.add("text-danger");
    } else if (desc.innerHTML == "" && desc.value == "") {
        let descError = getId("desc-error");
        let titleError = getId("title-error");
        titleError.innerHTML = "";
        titleError.classList.remove("text-danger");
        descError.innerHTML = "Description field is required.";
        descError.classList.add("text-danger");
    } else {
        getTitle();
        getDesc();
        appendNote(e);
    }
}

function getTitle(){
    let dummyTitle = getId("dummy-title");
    let title = getId("title");
    dummyTitle.innerHTML = title.value;
}

function getDesc(){
    let dummyDesc = getId("dummy-desc");
    let desc = getId("desc");
    dummyDesc.innerHTML = desc.value;
}

function changeBg(e){
    let dummyTitle = getId("dummy-title");
    let hiddenBg = getId("hidden-bg");
    dummyTitle.parentNode.style.backgroundColor = e.value;
    hiddenBg.value = e.value;
}

function changeColor(e){
    let dummyTitle = getId("dummy-title");
    let hiddenColor = getId("hidden-color");
    dummyTitle.parentNode.style.color = e.value;
    hiddenColor.value = e.value;
}

function appendNote(e){
    let noteBox = getId("note-box");
    let forthDiv = document.createElement("div");
    let thirdDiv = document.createElement("div");
    let secondDiv = document.createElement("div");
    let firstDiv = document.createElement("div");
    let span = document.createElement("span");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let i = document.createElement("i");

    noteBox.appendChild(forthDiv);
    forthDiv.appendChild(thirdDiv);
    forthDiv.classList.add("content-card");
    thirdDiv.appendChild(secondDiv);
    thirdDiv.classList.add("card-big-shadow");
    secondDiv.appendChild(firstDiv);
    secondDiv.classList.add("card");
    secondDiv.classList.add("card-just-text");    
    firstDiv.appendChild(span);
    firstDiv.classList.add("content");
    firstDiv.appendChild(span);
    span.classList.add("far");
    span.classList.add("fa-edit");
    span.setAttribute("onclick", "edit(this)");
    span.classList.add("d-none");        
    firstDiv.appendChild(h4);
    h4.classList.add("title");    
    firstDiv.appendChild(p);
    p.classList.add("description");
    firstDiv.appendChild(i);
    i.classList.add("fas");
    i.classList.add("fa-trash-alt");
    i.setAttribute("onclick", "deleteNote(this)");
    i.classList.add("d-none");        

    let title = getId("title");
    let dummyTitle = getId("dummy-title");
    let desc = getId("desc");
    let dummyDesc = getId("dummy-desc");
    let hiddenBackground = getId("hidden-bg");
    let hiddenColour = getId("hidden-color");

    firstDiv.style.backgroundColor = hiddenBackground.value;
    firstDiv.style.color = hiddenColour.value;

    h4.innerHTML = title.value;
    p.innerHTML = desc.value;

    title.value = "";
    desc.value = "";
    dummyTitle.innerHTML = "Add Title";
    dummyDesc.innerHTML = "Add Description";

    let clearbtn = getId("clearbtn");
    clearbtn.classList.remove('d-none');
    clearbtn.classList.add('d-block');

    e.setAttribute("data-dismiss", "modal");
}

function edit(e){      
    e.nextElementSibling.setAttribute("contentEditable", true);
    e.nextElementSibling.setAttribute("onkeypress","return (this.innerText.length < 30)");
    e.nextElementSibling.setAttribute("onkeyup","return (this.innerText.length < 30)");
    e.nextElementSibling.focus();
    e.nextElementSibling.nextElementSibling.setAttribute("contentEditable", true);
    e.nextElementSibling.nextElementSibling.setAttribute("onkeypress","return (this.innerText.length < 100)");
    e.nextElementSibling.nextElementSibling.setAttribute("onkeyup","return (this.innerText.length < 100)");

    e.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            return false;
        }
    }); 
}

function deleteNote(e) {
    let seconds = 500/1000;
    e.parentNode.style.transition = `opacity ${seconds}s ease`;
    e.parentNode.style.opacity = 0;
    setTimeout(function() {
        e.parentNode.remove(e);
    }, 500);
}

function clearAll(e){
    let noteBox = getId("note-box");
    noteBox.innerHTML = "";
    e.remove();
}