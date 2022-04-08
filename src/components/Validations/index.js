import * as yup from 'yup';

export const userSchema = yup.object().shape({

  user: yup.string().required('Usuário é um campo obrigatório.').matches(/^([a-z]+[.])[a-z]+$/, 'Nao é permitido numeros e/ou caracteres especiais alem de pronto (.).'),

  password: yup.string().min(6,'Senha deve ter pelo menos 6 dígitos.').matches(/^[0-9]+$/,'Senha deve ter apenas números.').max(9,'Senha deve ter no máximo 8 dígitos.').required('Senha é um campo obrigatório.')

  
})