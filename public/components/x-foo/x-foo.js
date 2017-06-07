class XFoo extends Polymer.Element {
    static get is() {
        return  'x-foo';
    }
}
customElements.define(XFoo.is, XFoo);