import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export async function addTools(req: Request, res: Response) {
  await prisma.tools.create({
    data:{
      name         : req.body.name,
      description  : req.body.description,
      status       : "Disponível",
      initial_date : null,
      final_date   : null,
      user         : null,
    }
  });

  res.status(200).send("add new tools "+ req.body.name);
}

export async function delTool(req: Request, res: Response){
  const data = await prisma.tools.delete({
    where: {
      id: parseInt(req.params.id)
    },
  })
  
  data ? res.status(200).json("del:\n"+data)
  : res.status(404).json({ status: '404 Not Found' })
}