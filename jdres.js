var d =document.createElement("div");
d.innerHTML = "hello"
d.setAttribute("style","position:fixed;top:0px;width:300px;height:100%;background:white;right:0px");
document.getElementsByTagName("body")[0].appendChild(d);

// create a new textarea element
const textarea = document.createElement('textarea');
// set attributes for the textarea element
textarea.setAttribute('id', 'myTextarea');
textarea.setAttribute('name', 'myTextarea');
textarea.setAttribute('cols', '50');
textarea.setAttribute('rows', '5');
// append the textarea element to the body of the HTML page
document.body.appendChild(textarea);

// create a new button element
const button = document.createElement('button');
// set attributes for the button element
button.setAttribute('id', 'myButton');
button.setAttribute('name', 'myButton');
button.innerHTML = 'Compare'; // set the label for the button
// append the button element to the body of the HTML page
document.body.appendChild(button);

