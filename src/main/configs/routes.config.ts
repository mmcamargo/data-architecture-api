import { usersRouter } from '../../app/features/users/routes';
import { loginRouter } from '../../app/features/login/routes';
import { Express } from 'express';

export const makeRoutes = (app: Express) => {
	app.use('/users', usersRouter);
	app.use('/login', loginRouter);
};
