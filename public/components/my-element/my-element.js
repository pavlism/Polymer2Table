class MyElement extends Polymer.Element {
    static get is() {
        return "my-element";
    }
    constructor() {
        //Called when the element is upgraded (that is, when an element is created, or when a previously-created element becomes defined).
        super();
        console.log('my-element constructor()');
    }
    static get properties() {
        return {
            user: String,
            userName: String
        }
    }

    connectedCallback() {
        //Called when the element is added to a document.
        super.connectedCallback();
        console.log('my-element connectedCallback');
    }

    disconnectedCallback() {
        //Called when the element is removed from a document.
        super.disconnectedCallback();
        console.log('my-element disconnectedCallback');
    }

    attributeChangedCallback(name, old, value) {
        //Called when any of the element's attributes are changed, appended, removed, or replaced,
        super.attributeChangedCallback(name, old, value);
        console.log('my-element attributeChangedCallback');
    }
}
// Register the new element with the browser
customElements.define(MyElement.is, MyElement);