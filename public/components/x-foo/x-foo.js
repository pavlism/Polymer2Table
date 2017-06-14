class XFoo extends Polymer.Element {
    static get is() {
        return  'x-foo';
    }
    
    static get properties() {
        return {
            cell: {type: String, value: 'test'}
        };
    }

    ready() {
        debugger;
        var cell = this.get('cell');
        super.ready();
        if(cell ==='test'){
            this.outerHTML = '<p>test</p>';
        }else{
            this.outerHTML = '<p>not-test [[cell]]='+ cell +'</p>';
        }
    }

}
customElements.define(XFoo.is, XFoo);