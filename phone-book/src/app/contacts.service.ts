import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  id = 1;
  contacts: Contact[] = [];

  getAllSorted(): Observable<Contact[]> {
    return of(this.contacts.sort(((a, b) => a.name.localeCompare(b.name))));
  }

  create(dto: Contact): Observable<Contact> {
    dto.id = this.id;
    this.id++;
    this.contacts.push(dto);
    return of(dto);
  }

  update(old: Contact, dto: Contact): Observable<Contact> {
    const index = this.contacts.indexOf(old);
    if (index !== -1) {
      dto.id = old.id;
      this.contacts[index] = dto;
    }
    return of(dto);
  }

  delete(dto: Contact): Observable<any> {
    const index = this.contacts.indexOf(dto);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
    return of(dto);
  }
}
