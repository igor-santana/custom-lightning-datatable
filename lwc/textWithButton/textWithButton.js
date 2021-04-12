import { LightningElement, api } from "lwc";

export default class TextWithButton extends LightningElement {

    @api recordId
    @api text = ''

    handleButtonClick() {
        const event = new CustomEvent('buttonclick', { 
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: { recordId: this.recordId }
        });
        this.dispatchEvent(event);
    }

}