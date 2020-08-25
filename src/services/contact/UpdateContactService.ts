import { getRepository } from 'typeorm';

import Contact from '../../models/Contact';

interface RequestDTO {
  id: string;
  name: string;
  phoneNumber: string;
}

class UpdateContactService {
  public async execute({ id, name, phoneNumber }: RequestDTO): Promise<Contact | undefined> {
    const contactsRepository = getRepository(Contact);

    const updateContact = await contactsRepository.findOne(id);

    if (!updateContact) {
      throw new Error('Contact not found!');
    }

    updateContact.name = name || updateContact.name;
    updateContact.phoneNumber = phoneNumber || updateContact.phoneNumber;

    const updatedContact = await contactsRepository.save(updateContact);

    return updatedContact;
  }
}

export default UpdateContactService;
