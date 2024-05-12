import { body } from 'express-validator';

export const validateProduct = [
    body('name').isString().notEmpty().withMessage('Name must be a non-empty string'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('description').isString().notEmpty().withMessage('Description must be a non-empty string'),
];
