import {getRepository} from 'typeorm';

import Contact from '../models/Contact';

class ReadContactService {
  public async execute(id: string): Promise<Contact> {
    const contactRepository =  getRepository(Contact);

    const contact = await contactRepository.findOne(id);

    if(contact) {
      return contact;
    }else{
      throw Error;
    }
  }
}

export default ReadContactService;
