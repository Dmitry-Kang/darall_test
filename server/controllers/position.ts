const errorHandler = require('../utils/errorHandler')
import {NextFunction, Request, Response} from 'express';
import { PrismaClient } from '@prisma/client'
import * as path from 'path';
import * as fs from 'fs';


const prisma = new PrismaClient()

module.exports.getAll = async function(req: Request, res: Response) {
  try {
    const positions = await prisma.position.findMany({

    })
    res.status(200).json(positions)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getByCategoryId = async function(req: Request, res: Response) {
  try {
    const positions = await prisma.position.findMany({
      where: {
        categoryId: Number(req.params.id)
      }
    })
    res.status(200).json(positions)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getById = async function(req: Request, res: Response) {
  try {
    const position = await prisma.position.findMany({
      where: {
        id: Number(req.params.id)
      }
    })
    res.status(200).json(position)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function(req: Request, res: Response, next: NextFunction) {
  const file = req['file']
  try {
    const position = await prisma.position.create({
      data: {
        title: String(req.body.title),
        content: String(req.body.content),
        imageSrc: String(file?.path || ''),
        price: Number(req.body.price),
        categoryId: Number(req.body.categoryId)
      }
    })
    res.status(201).json(position)
  } catch (e) {
    fs.unlinkSync(path.resolve(file?.path || ''));
    errorHandler(res, e)
  }
}

module.exports.remove = async function(req: Request, res: Response) {
  try {
    const position = await prisma.position.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.status(200).json(position)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function(req: Request, res: Response) {
  try {
    const position = await prisma.position.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        title: String(req.body.title),
        content: String(req.body.content),
        imageSrc: String(req.body.imageSrc),
        price: Number(req.body.price),
        categoryId: Number(req.body.categoryId)
      }
    })
    res.status(200).json(position)
  } catch (e) {
    errorHandler(res, e)
    console.log(e)
  }
}