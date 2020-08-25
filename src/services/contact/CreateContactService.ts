import { getRepository } from 'typeorm';

import Contact from '../models/Contact';
import User from '../models/User';

interface RequestDTO {
  name: string;
  phoneNumber: string;
  user_id: string;
}

class CreateContactService {
  public async execute({ name, phoneNumber, user_id }: RequestDTO): Promise<Contact> {
    const usersRepository = getRepository(User);
    const contactsRepository = getRepository(Contact);

    const user = await usersRepository.findOne({
      where: {
        id: user_id
      }
    });

    if (!user) {
      throw new Error('User Not Found!');
    }

    const contact = contactsRepository.create({
      name,
      phoneNumber,
      user_id: user,
    });

    await contactsRepository.save(contact);

    return contact;
  }
}

export default CreateContactService;

