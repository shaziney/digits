import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Shaziney',
    last: 'Natividad',
    address: '2545 McCarthy Mall',
    telephone: '808-956-6824',
    email: 'shaziney@hawaii.edu',
  },
  {
    first: 'Shaziney',
    last: 'Natividad',
    address: 'P.O. Box 2128',
    telephone: '808-226-7328',
    email: 'shaziney@icloud.com',
  },
  {
    first: 'Shaziney',
    last: 'Natividad',
    address: '91-1017 Kaiakua Street',
    telephone: '808-426-0705',
    email: 'shaziney@gmail.com',
  },
  {
    first: 'Shaziney',
    last: 'Natividad',
    address: '91-1013 Kaiko Street',
    telephone: '808-722-8643',
    email: 'shaziney@live.me',
  },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
