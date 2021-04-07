import LightningDatatable from 'lightning/datatable';
import textWithButton from './textWithButton';
 
export default class CustomLightningDatatable extends LightningDatatable {
    
  static customTypes = {
      textWithButton: {
          template: textWithButton,
          typeAttributes: ['recordId', 'text']
      }
  }

}