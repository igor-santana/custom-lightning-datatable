import { LightningElement, api } from "lwc";

export default class TextWithButtonType extends LightningElement {

    @api recordId
    @api value = ''

    handleButtonClick() {
        const event = new CustomEvent('buttonclick', { 
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: { recordId: this.recordId } });
        this.dispatchEvent(event);
    }

}