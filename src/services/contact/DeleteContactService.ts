import { getRepository } from 'typeorm';

import Contact from '../models/Contact';

class DeleteContactService {
  public async execute(id: string): Promise<void> {
    const contactRepository = getRepository(Contact);

    const contact = await contactRepository.findOne(id);

    if(contact) {
      await contactRepository.remove(contact);
    }else{
      throw Error;
    }
  }
}
export default DeleteContactService;
