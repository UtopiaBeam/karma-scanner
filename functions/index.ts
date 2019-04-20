import { Request, Response } from 'express';

function getRandomDayInMilliseconds() {
    const MAX_AGE_DAYS: number = 40000;
    const DAY_IN_MSECS: number = 24 * 60 * 60 * 1000;
    const days: number = Math.random() * MAX_AGE_DAYS;
    return days * DAY_IN_MSECS;
}

export function karma(req: Request, res: Response) {
    const { birthday, firstName, lastName } = req.body;
    if (!birthday || !firstName || !lastName) {
        res.status(400).send({
            message: 'Please complete every field!',
        });
    } else {
        const deathday: Date = new Date(
            new Date().getTime() + getRandomDayInMilliseconds(),
        );
        res.send({ deathday });
    }
}
