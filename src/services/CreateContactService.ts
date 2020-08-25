import { getRepository } from 'typeorm';

import Contact from '../models/Contact';

interface RequestDTO {
  name: string;
  phoneNumber: string;
}

class CreateContactService {
  public async execute({name, phoneNumber}: RequestDTO): Promise<Contact> {
    const contactsRepository = getRepository(Contact);

    const contact = contactsRepository.create({name, phoneNumber});

    await contactsRepository.save(contact);

    return contact;
  }
}

export default CreateContactService;

