import { getRepository } from 'typeorm';
import User from '../../models/User';

class DeleteUserService {
  public async execute(id: string) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ id });

    if (!user) {
      throw new Error('User not found!');
    }

    await userRepository.remove(user);

    return user;
  }
}

export default DeleteUserService;
