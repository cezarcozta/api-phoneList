import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import CreateUserService from '../services/user/CreateUserService';
import DeleteUserService from '../services/user/DeleteUserService';

import User from '../models/User';

const usersRouter = Router();

usersRouter.get('/', async (req: Request, res: Response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return res.status(200).json(users);
});

usersRouter.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });

  delete user.password;

  return res.status(201).json(user);
});

usersRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const createDeleteContact = new DeleteUserService();

  await createDeleteContact.execute(id);

  return res.status(204).send();
});

// usersRouter.get('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;


//   const createReadContact = new Readuserservice();

//   const contact = await createReadContact.execute(id);

//   return res.json(contact);
// });

// usersRouter.put('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { name, phoneNumber } = req.body;

//   const createUpdateContact = new Updateuserservice();

//   const contact = await createUpdateContact.execute({ id, name, phoneNumber });

//   return res.json(contact);
// });

export default usersRouter;
