import { createElement } from 'lwc';
import ContactCard from 'c/brokenComponent';
import { getRecord } from 'lightning/uiRecordApi';

describe('@wire demonstration test', () => {

    it('displays the correct title field', () => {
        const element = createElement('c-broken-component', { is: ContactCard });
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            const contactTitle = element.shadowRoot.querySelector('.contact-title');
            expect(contactTitle).toBeTruthy();
            expect(contactTitle.textContent).toBe('CEO');
        });        
    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
});
