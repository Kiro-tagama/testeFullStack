import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export async function getAllTools(req: Request, res: Response){
  const data = await prisma.tools.findMany()

  data ? res.status(200).json(data)
  : res.status(404).json({ status: '404 Not Found' })
}

export async function getTool(req: Request, res: Response){
  const data = await prisma.tools.findUnique({
    where: {
      id: parseInt(req.params.id)
    },
  })
  
  data ? res.status(200).json(data)
  : res.status(404).json({ status: '404 Not Found' })
}