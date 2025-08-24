import { ValidatorFn } from '@angular/forms';

const equalConfirmation = (otherFieldName: string, message = "Campos não coincidem"): ValidatorFn => (control) => {
  const root = control.root;
  const field = control;
  const otherField = root.get(otherFieldName);

  if(field.value !== otherField?.value)
    return {
      custom: {
        message
      }
    }

  return null;
}

const password = (): ValidatorFn => control => {
  const passwordRules = [
    {
      regex: /^.{8,}$/,
      message: 'A senha deve ter 8 caracteres ou mais',
    },
    {
      regex: /(?=.*[a-z])/,
      message: 'A senha deve conter uma letra minúscula',
    },
    {
      regex: /(?=.*[A-Z])/,
      message: 'A senha deve conter uma letra maiúscula',
    },
    {
      regex: /(?=.*\d)/,
      message: 'A senha deve conter um número',
    },
    {
      regex: /(?=.*[\W_])/,
      message: 'A senha deve conter um caractere especial',
    },
  ];

  const error = passwordRules.find(rule => !rule.regex.test(control.value));

  if(error) {
    return {
      custom: {
        message: error.message
      }
    }
  }

  return null;
}

export const CustomValidators = {
  equalConfirmation,
  password
};
