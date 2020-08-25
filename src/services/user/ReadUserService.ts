import { getRepository } from 'typeorm';

import User from '../../models/User';

class ReadUserService {
  public async execute(id: string): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw Error('User Not Found');
    }

    return user
  }
}

export default ReadUserService;
