import { getRepository } from 'typeorm';

import Contact from '../../models/Contact';
import User from '../../models/User';

interface RequestDTO {
  name: string;
  phoneNumber: string;
  user_id: User;
}

class CreateContactService {
  public async execute({ name, phoneNumber, user_id }: RequestDTO): Promise<Contact> {
    const contactsRepository = getRepository(Contact);

    const contact = contactsRepository.create({
      name,
      phoneNumber,
      user_id,
    });

    await contactsRepository.save(contact);

    return contact;
  }
}

export default CreateContactService;

