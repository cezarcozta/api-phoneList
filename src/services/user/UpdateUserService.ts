import { getRepository } from 'typeorm';

import User from '../../models/User';

interface RequestDTO {
  id: string;
  name: string;
  email: string;
}

class UpdateUserService {
  public async execute({ id, name, email }: RequestDTO): Promise<User | undefined> {
    const usersRepository = getRepository(User);

    const updateUser = await usersRepository.findOne(id);

    if (!updateUser) {
      throw new Error('User not found!');
    }

    updateUser.name = name || updateUser.name;
    updateUser.email = email || updateUser.email;

    const updatedUser = await usersRepository.save(updateUser);

    return updatedUser;
  }
}

export default UpdateUserService;
