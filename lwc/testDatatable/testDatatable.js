import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    columns = [
        { label: 'Nome', fieldName: 'id', type: 'textWithButton', typeAttributes: { text: { fieldName: 'name' } }},
        { label: 'Idade', fieldName: 'age', type: 'number' }
    ];

    data = [
        { id: 1, name: 'João', age: 15 },
        { id: 2, name: 'Maria', age: 54 },
        { id: 3, name: 'Bruno', age: 29 },
        { id: 4, name: 'Guilherme', age: 25 },
        { id: 5, name: 'Joana', age: 18 },
        { id: 6, name: 'Josué', age: 28 },
        { id: 7, name: 'Minerva', age: 35 }, 
        { id: 8, name: 'Liana', age: 52 },
    ];

}
