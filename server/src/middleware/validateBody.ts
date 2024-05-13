import { body } from 'express-validator';

export const validateProduct = [
    body('name').isString().notEmpty().withMessage('Name must be a non-empty string'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('description').isString().notEmpty().withMessage('Description must be a non-empty string'),
];

export const validateUser = [
    body('name').isString().notEmpty().withMessage('Name must be a non-empty string'),
    body('email').isString().notEmpty().withMessage('email must be a non-empty string'),
    body('password').isString().notEmpty().withMessage('password must be a non-empty string'),
]
