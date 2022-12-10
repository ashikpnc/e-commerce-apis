import { Request, Response, NextFunction } from 'express'


const getProfile = (req: Request, res: Response, next: NextFunction) => {
    res.send('hi')
}

const updateProfile = (req: Request, res: Response, next: NextFunction) => {

}

const deleteProfile = (req: Request, res: Response, next: NextFunction) => {

}

export {
    getProfile,
    updateProfile,
    deleteProfile
}