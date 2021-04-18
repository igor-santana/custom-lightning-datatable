import LightningDatatable from 'lightning/datatable';
import textWithButton from './textWithButton';
 
export default class CustomDatatable extends LightningDatatable {
    
  static customTypes = {
      textWithButton: {
          template: textWithButton,
          typeAttributes: [ 'value', 'recordId' ]
      }
  }

}