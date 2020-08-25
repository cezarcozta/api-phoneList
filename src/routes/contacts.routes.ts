import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import CreateContactService from '../services/contact/CreateContactService';
import DeleteContactService from '../services/contact/DeleteContactService';
import ReadContactService from '../services/contact/ReadContactService';
import UpdateContactService from '../services/contact/UpdateContactService';

import Contact from '../models/Contact';

const contactsRouter = Router();

contactsRouter.get('/', async (req: Request, res: Response) => {
  const contactsRepository = getRepository(Contact);

  const contacts = await contactsRepository.find();

  return res.status(200).json(contacts);
});

contactsRouter.post('/', async (req: Request, res: Response) => {
  const { name, phoneNumber, user_id } = req.body;

  const createContact = new CreateContactService();

  const contact = await createContact.execute({ name, phoneNumber, user_id });

  return res.status(201).json(contact);
});

contactsRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const createDeleteContact = new DeleteContactService();

  await createDeleteContact.execute(id);

  return res.status(204).send();
});

contactsRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const createReadContact = new ReadContactService();

  const contact = await createReadContact.execute(id);

  return res.status(200).json(contact);
});

contactsRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, phoneNumber } = req.body;

  const createUpdateContact = new UpdateContactService();

  const contact = await createUpdateContact.execute({ id, name, phoneNumber });

  return res.status(204).json(contact);
});


export default contactsRouter;
