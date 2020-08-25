import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import CreateContactService from '../services/CreateContactService';
import DeleteContactService from '../services/DeleteContactService';
import ReadContactService from '../services/ReadContactService';
import UpdateContactService from '../services/UpdateContactService';

import Contact from '../models/Contact';

const contactsRouter = Router();

contactsRouter.get('/', async (req: Request, res: Response) => {
  const contactsRepository = getRepository(Contact);

  const contacts = await contactsRepository.find();

  return res.json(contacts);
});

contactsRouter.post('/', async (req: Request, res: Response) => {
  const { name, phoneNumber } = req.body;

  const createContact =  new CreateContactService();

  const contact = await createContact.execute({name, phoneNumber});

  return res.json(contact);
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

  return res.json(contact);
});

contactsRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const {name, phoneNumber} = req.body;

  const createUpdateContact = new UpdateContactService();

  const contact = await createUpdateContact.execute({ id, name, phoneNumber});

  return res.json(contact);
});


export default contactsRouter;
