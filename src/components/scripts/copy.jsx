export const CopyElements = () => {

    let link = document.getElementById("#text-to-copy");

    addEventListener('click', (event) => {
        // Prevent the anchors to realize their functions about opening links to other pages.
        event.preventDefault();

        // Store the text we want to copy into a variable.
        let textToCopy = link.value;

        // Create a text area as a temporary element to store the text to copy.
        let temporaryElement = document.createElement("textarea");
        temporaryElement.value = textToCopy;
        document.body.appendChild(temporaryElement);

        // Select and copy the text from textarea element
        temporaryElement.select();
        document.execCommand("copy");

        // Now we delete the textarea element because it has not any function on our code.
        document.body.removeChild(temporaryElement);

        // Notify the user we've copied the text.
        alert(`Text copied: '${textToCopy}`)
    });
}


