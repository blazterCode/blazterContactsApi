'use strict';
import ContactSchema from '../schemas/contact';
import { setError } from '../helpers/utils';

export const registerContact = async (req, res, next) => {
  try {
    const Contact = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    };

    const newContact = new ContactSchema(Contact);
    const ContactExist = await ContactSchema.findOne({
      message: newContact.message
    });
    if (ContactExist) return next(setError(409, 'El mensaje ya existe'));
    const contactCreted = await newContact.save();
    return res.status(201).json(contactCreted);
  } catch (error) {
    console.log(error);
    return next(setError(500, 'FAIL TO REGISTER'));
  }
};
