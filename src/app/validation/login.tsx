import { z } from 'zod'

{/* Esquema de validación del formulario*/}
// const reg = /^([A-z])*[^\s]\1*$/
const reg = /^[A-Za-z0-9]+$/g
const numberReg = /^\d+$/
export const formInfoSchema = z.object({
    dni: z
    .string()
    .min(8, {message: 'Por favor, complete su DNI'})
    .max(9, {message: 'El DNI debe tener máximo 9 caracteres'})
    .regex(reg, { message: 'El DNI sólo admite letras y números, sin caracteres especiales' }),
    placa: z
    .string()
    .min(6, {message: 'La placa debe tener mínimo 6 dígitos y máximo 7'})
    .max(7, {message: 'La placa debe contener hasta 7 caracteres'})
    .regex(reg, { message: 'La placa sólo admite letras y números, sin caracteres especiales' }),
    celular: z
    .string()
    .min(11, { message: 'El número de celular debe tener 11 dígitos' })
    .max(11, { message: 'El número de celular debe tener 11 dígitos' })
    .regex(numberReg, { message: 'Sólo se admiten números' }),
    acepto: z
    .boolean()
    .refine(acepta => acepta === true, {message: 'Debe aceptar las politicas y condiciones para continuar'})
 }) 