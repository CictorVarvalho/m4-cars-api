import { Request, Response } from "express";

interface ICarsControllers{
    create(req: Request, res: Response): Response;
    getMany(req: Request, res: Response): Response
    getOne(req: Request, res: Response): Response
    delete(req: Request, res: Response): Response
    update(req: Request, res: Response): Response
}

export class CarsControllers implements ICarsControllers{
    create(req: Request, res: Response): Response{

    }

    getMany(req: Request, res: Response): Response{

    }

    getOne(req: Request, res: Response): Response{

    }

    delete(req: Request, res: Response): Response{

    }

    update(req: Request, res: Response): Response{

    }
}