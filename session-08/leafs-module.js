// Define the custom element class
class LeifComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("LB");
    }
}

// Register the custom element with the browser
customElements.define(
    "leif-component",
    LeifComponent,
    (options = HTMLButtonElement)
);
