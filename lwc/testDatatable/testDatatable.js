import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class TestDatatable extends NavigationMixin(LightningElement) {

    columns = [
        { label: 'Nome', fieldName: 'name', type: 'textWithButton', typeAttributes: { recordId: { fieldName: 'id' } }},
        { label: 'Idade', fieldName: 'age', type: 'number' },
        { label: 'Gênero', fieldName: 'gender', type: 'text' },
        { label: 'Profissão', fieldName: 'occupation', type: 'text' }
    ];

    data = [
        { id: 1, name: 'João Souza', age: 15, gender: 'Masculino', occupation: 'Desenvolvedor' },
        { id: 2, name: 'Maria de Castro', age: 54, gender: 'Feminino', occupation: 'Contadora' },
        { id: 3, name: 'Bruno Figueiredo', age: 29, gender: 'Masculino', occupation: 'Gerente' },
        { id: 4, name: 'Guilherme Soares', age: 25, gender: 'Masculino', occupation: 'Administrador' },
        { id: 5, name: 'Joana Diaz', age: 18, gender: 'Feminino', occupation: 'Analista de RH' },
        { id: 6, name: 'Josué Pedroso', age: 28, gender: 'Masculino', occupation: 'Zelador' },
        { id: 7, name: 'Minerva Rodrigues', age: 35, gender: 'Feminino', occupation: 'Jornalista' }, 
        { id: 8, name: 'Liana Santana', age: 52, gender: 'Feminino', occupation: 'CEO' },
    ];

    handleButtonClick(event) {
        const { recordId } = event.detail;
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId,
                actionName: 'view',
            },
        }).then(url => {
            window.open(url, '_blank');
        });
    }

}
