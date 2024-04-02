// Function to select text inside a clickable element
function selectText(element) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
}

// Get the link elements
const apiLink = document.getElementById('apiLink');
const apiLink2 = document.getElementById('apiLink2');

// Add click event listeners to the links
apiLink.addEventListener('click', function(event) {
    // Prevent the default behavior for all links inside #apiLink
    event.preventDefault();
});

apiLink2.addEventListener('click', function(event) {
    // Prevent the default behavior for all links inside #apiLink2
    event.preventDefault();
});
