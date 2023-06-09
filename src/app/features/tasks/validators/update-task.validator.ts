import { HttpHelper } from '../../../shared/utils/helpers';
import { Request, Response, NextFunction } from 'express';

export const updateTaskValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { isArchived, title, content, userUid } = req.body;

	if (!isArchived && !title && !content) {
		return HttpHelper.badRequest(res, 'Nenhum valor encontrado.', 404);
	}

	if (!userUid) {
		return HttpHelper.badRequest(
			res,
			'UID do usuário não encontrado.',
			404
		);
	}

	next();
};
