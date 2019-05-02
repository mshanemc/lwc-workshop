import { LightningElement, api } from 'lwc';

const FIELDS = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email',
];

export default class ContactCard extends LightningElement {
    @api recordId;

    
    
}