import { Request, Response, NextFunction, Errback } from 'express'

export default function (error: Errback, req: Request, res: Response, next: NextFunction) {
    res.json({})
}