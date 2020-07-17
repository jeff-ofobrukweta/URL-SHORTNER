import { Request, Response } from 'express'

export abstract class ApiController {
    public abstract createOption(req: Request, res: Response): void
    public abstract readOption(req: Request, res: Response): void
    public abstract updateOption(req: Request, res: Response): void
    public abstract deleteOption(req: Request, res: Response): void
}