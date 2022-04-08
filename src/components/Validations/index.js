import * as yup from 'yup';


export const schema = yup.object().shape({
  user: yup.string().required('Usuário é um campo obrigatório.').matches(/^([a-z]+[.])[a-z]+$/i, 'Nao é permitido numeros e/ou caracteres especiais alem de pronto (.).'),

  password: yup.string().required('Senha é um campo obrigatório.').min(6, 'Senha deve ter pelo menos 6 dígitos.').matches(/^[0-9]+$/, 'Senha deve ter apenas números.').max(8,'Senha deve ter no máximo 8 dígitos.')
})