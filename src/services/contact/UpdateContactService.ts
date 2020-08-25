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

    try {
      await contactsRepository.update(id,
        {
          name: name,
          phoneNumber: phoneNumber,
        }
      );

      const edittedContact = await contactsRepository.findOne(id);

      return edittedContact;

    } catch (error) {
      throw Error;
    }
  }
}

export default UpdateContactService;
