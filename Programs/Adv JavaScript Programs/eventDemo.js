function fun1() {
    //alert("event fired")
    // get the value of text field using id selector 
    //var name = document.getElementById("n1").value;
    //alert("Welcomer user "+name);
    // get the value of text field using name selector 
    var name = document.getElementsByName("uname")[0].value;
    //alert("Welcomer user "+name);
    // set the value in another text field using id selector 
    document.getElementById("n2").value = "Welcome "+name;
    document.getElementById("n1").value = "";
    document.getElementsByTagName("div")[0].innerHTML = "Welcome "+name;
}
var count=0;
function createNewTags(){
    count++;
    let pTag = document.createElement("p");     // create p tag object. 
    let pTagContent = document.createTextNode("This is new paragraph"); // create text node object.
    pTag.appendChild(pTagContent);  // append text node to p tag.   <p>This is new paragraph</p>
    pTag.setAttribute("id", count);   // set id attribute to p tag. <p id="p1">This is new paragraph
    document.body.appendChild(pTag);    // p tag is appended to body tag.
}