// Create the button element
const button = document.createElement("button");
button.id = "askai";
button.value = "askai";
button.innerHTML = "AskAI";
button.setAttribute("style","cursor:pointer;background:orange;padding:5px;border-radius:5px;position:fixed;bottom:0px;right:0px");

// Append the button to the body
document.body.appendChild(button);

// Add a click event listener to the button
button.addEventListener("click", function() {
        // Code to execute when the button is clicked
        // Create the sidebar div element
        const sidebar = document.createElement("div");
        sidebar.id = "sidebar";
        sidebar.style.position = "fixed";
        sidebar.style.top = "0px";
        sidebar.style.right = "0px";
        sidebar.style.width = "300px";
        sidebar.style.height = "100%";
        sidebar.style.background = "#888";
        sidebar.style.padding = "5px";
        document.body.appendChild(sidebar);

        // Set the html width property
        document.documentElement.style.width = "calc(100% - 300px)";

        // Create the container div element
        const container = document.createElement("div");
        container.id = "container";
        container.style.background = "#ddd";
        container.style.height = "calc(100% - 120px)";
        container.style.overflow = "auto";
        container.style.padding = "10px";
        container.style.border = "2px inset gray";
        container.style.borderRadius = "10px";
        container.style.margin = "5px";
        sidebar.appendChild(container);

        // Create the message box element
        const messageBox = document.createElement("div");
        messageBox.style.background = "#f6f6f4";
        messageBox.style.border = "1px solid gray";
        messageBox.style.width = "auto";
        messageBox.style.borderRadius = "10px";
        messageBox.style.padding = "4px";
        messageBox.style.bottom = "0px";
        messageBox.innerHTML = "Hello, you can talk to me";
        container.appendChild(messageBox);

        // Create the input element
        const input = document.createElement("input");
        input.id = "questionbox";
        input.style.height = "50px";
        input.style.width = "280px";
        input.style.background = "white";
        input.style.position = "fixed";
        input.style.bottom = "10px";
        input.style.borderRadius = "10px";
        input.style.padding = "4px";
        input.placeholder = "Ask me";
        sidebar.appendChild(input);

        // Create the waiting image element
        const waiting = document.createElement("img");
        waiting.id = "waiting";
        waiting.src = "https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif";
        waiting.style.width = "50px";
        waiting.style.display = "none";
        waiting.style.position = "fixed";
        waiting.style.zIndex = "9999999";
        waiting.style.bottom = "100px";
        container.appendChild(waiting);

        document.querySelector('#questionbox').addEventListener('keypress', function(event) {
            if (event.which === 13) {
              var qq = this.value;
              var message = document.createElement('div');
              message.style.margin = '5px';
              message.style.background = '#c5e1cc';
              message.style.border = '1px solid gray';
              message.style.width = 'auto';
              message.style.borderRadius = '10px';
              message.style.padding = '4px';
              message.style.textAlign = 'right';
              message.textContent = this.value;
              document.querySelector('#container').appendChild(message);
              document.querySelector('#container').scrollTop = document.querySelector('#container').scrollHeight;
              var context = document.querySelector("body").textContent;
              context = context.substring(0, 1500);

              document.querySelector('#waiting').style.display = 'block';
                var scriptkey = "AKfycbyJMjBv0yzL7CLfS8mK4rRbbwpfCC-p_VPfC4EZlDm-Ktmy--abnmigSJnW6iegB9iu0g";
                var url = "https://script.google.com/macros/s/" + scriptkey + "/exec";
                var qq = document.querySelector('#questionbox').value;
                var context = document.querySelector("body").textContent.substring(0, 1500);
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onload = function() {
                if (xhr.status === 200) {
                    document.querySelector('#waiting').style.display = 'none';
                    var textarea = document.createElement('textarea');
                    textarea.style.background = 'rgb(246, 246, 244)';
                    textarea.style.border = '1px solid gray';
                    textarea.style.width = '250px';
                    textarea.style.height = 'min-content';
                    textarea.style.borderRadius = '10px';
                    textarea.style.padding = '4px';
                    textarea.style.bottom = '0px';
                    textarea.style.overflow = 'overlay';
                    textarea.classList.add('');
                    textarea.rows = 20;
                    textarea.cols = 20;
                    textarea.textContent = xhr.responseText;
                    document.querySelector('#container').appendChild(textarea);
                } else {
                    console.error("Error saving data: " + xhr.status);
                }
                };
                xhr.onerror = function() {
                console.error("Error saving data: " + xhr.status);
                };
                xhr.send("Q=" + qq + "for this job, write formatted text :" + context + "&W=");
                document.querySelector('#questionbox').value = '';

            }
          });
          

});
