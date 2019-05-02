import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [ 'Contact.Name', 'Contact.Title', 'Contact.Phone', 'Contact.Email'];

export default class ContactCard extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    contact;
    
}