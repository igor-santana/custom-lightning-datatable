import { LightningElement, api } from "lwc";

export default class TextWithButton extends LightningElement {

    @api recordId
    @api text = ''

    handleButtonClick() {
        const event = new CustomEvent('buttonclick', { recordId: this.recordId })
        this.dispatchEvent(event)
    }

}