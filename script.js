window.addEventListener('load', function () {
    var chart = bb.generate({
        data: {
            columns: [
                ["React", 80],
                ["Vue", 80],
                ["JavaScript/TypeScript", 90],
                ["Wechat mini program", 80],
                ["Web Application Development", 85],
                ["Python", 50],
                ["Flutter", 50],
                ["RAG", 40],
                ["Java", 60],
                ["PyTorch/MNN/CV/CNN", 40],
                ["LoRa/SFT/OSS/SQL", 70],
                ["Mtop/Switch/ABTest", 65],
                ["Antv X6/Antv G6", 70],
                ["LangGraph/Agent Theory", 60],
                ["IM/WSS/MetaQ", 85],
                ["Alimap/TraceId/STT/SLS", 70],
                ["Webpack/Yarn/NodeJS", 60],

            ],
            type: "donut",
            onclick: function (d, i) {},
            onover: function (d, i) {},
            onout: function (d, i) {}
        },
        donut: {
            title: "Skills Evolution"
        },
        bindto: "#donutChart"
    });
});

// function setEvent() {
//     // Get the image element
//     var image = document.querySelector('img');

//     // Set up a click event listener.
//     image.addEventListener('click', hideImage);
// }

// function hideImage() {
//     var image = document.querySelector('img');

//     // Change the visibility or display style of the image.
//     // image.style.display = 'none';
//     image.style.visibility = 'hidden';
// }

function addMessage() {
    // Get the name and message from the input box.
    var nameInput = document.getElementById('name');
    var messageInput = document.getElementById('message');
    var name = nameInput.value;
    var message = messageInput.value;

    // Check if the name and message inputs are empty.
    if (name.trim() === '' || message.trim() === '') {
        // Display an error message or perform any desired action.
        alert('Please enter a name and message.');
        return; // Exit the function if inputs are empty.
    }

    // Get the message container and Create a new message element.
    var messageContainer = document.getElementById('messageContainer');
    var newMessage = document.createElement('div');

    // Set the content of the new message element, making the name in the added message bold.
    newMessage.innerHTML = '<strong>' + name + '</strong>: ' + message;

    // Add the new message element to the message container.
    messageContainer.appendChild(newMessage);

    // Clear the input box.
    nameInput.value = '';
    messageInput.value = '';
}

function clearMessage() {
    var messageContainer = document.getElementById('messageContainer');
    var nameInput = document.getElementById('name');
    var messageInput = document.getElementById('message');

    // Clear the input box.
    nameInput.value = '';
    messageInput.value = '';
    // Remove all child nodes from the message container.
    while (messageContainer.firstChild) {
        messageContainer.removeChild(messageContainer.firstChild);
    }
}
/*
1.WEB FORM (15%) Somewhere in the page, set up a simple form to collect “Name” and “Message”. After the user clicks on “Add a Message”, the name and message should appear in the space under the form.
answer:   shown in function addMessage()/clearMessage() and index.html Message Part

2.JAVASCRIPT (25%) In this function, set up an event listener so that when the user clicks on your image in the page, it disappears. Change the <body> tag in the HTML file so this function is called after page loading is done:
answer: 
    1.Disappear personal photo, shown as setEvent() and hideImage(), But only disappear the photo, I didn't do some toggle Function to change the visiblity of the photo.
Because :(For the body onload event handler, it fires only once when the page has finished loading. This is because the onload event will only fire once after the entire page has loaded and will not fire again at any other time.)
    2.(Challenge 2!) Open the index.html to see the bbChart, because of my SID 1155197771 the last number is 1. So i select the area chart to display.

*/

