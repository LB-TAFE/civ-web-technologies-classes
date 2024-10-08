// Challenge 5 Starter
const sidebar = document.querySelector(".sidebar");

function toggleSidebarContent() {
    sidebar.children[1].removeChild(sidebar.children[1].firstChild);

    const newElement = document.createElement("p");
    newElement.textContent = "New content";
    sidebar.appendChild(newElement);
}

// Add a button to toggle the sidebar content
const toggleButton = document.createElement("button");
toggleButton.textContent = "Click me";
toggleButton.addEventListener("click", toggleSidebarContent);
// Append the button to the body
document.body.append(toggleButton);
