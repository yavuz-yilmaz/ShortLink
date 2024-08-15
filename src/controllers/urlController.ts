import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import { Url } from '../models/Url';

export const helloWorld = (req: Request, res: Response) => {
  res.send('Hello world!');
};

export const saveUrl = async (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url) {
    throw new Error('You should give an url to short');
  }

  const uri = nanoid(7);

  const urlObject = await Url.create({ url, uri });

  res.status(201).json({
    status: 'success',
    data: urlObject,
  });
};

export const getUrl = async (req: Request, res: Response) => {
  const uri = req.params.uri;

  if (!uri) {
    throw new Error('You should give an uri');
  }

  const urlObject = await Url.findOne({ where: { uri } });

  if (!urlObject) {
    throw new Error('Url not found');
  }

  res.redirect(urlObject.url);
};
