import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Contact, CONTACTS } from '../data-contacts';

@Component({
    selector: 'app-phone-field',
    templateUrl: './phone-field.component.html',
    styleUrls: ['./phone-field.component.scss']
})
export class PhoneFieldComponent {
    @Input() public form!: FormGroup;

    public contact: Contact;
    public contactList: Contact[] = CONTACTS;
    public TLD = 'cl';

    constructor() {
        this.contact = this._getContact(this.TLD);
    }

    private _getContact(TLD: string): Contact {
        const aux = (TLD === 'mx' ? 'me' : TLD);
        return this.contactList.filter(c => c.country_code === aux)[0];
    }

}
