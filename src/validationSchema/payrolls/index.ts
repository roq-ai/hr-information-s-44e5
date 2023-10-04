import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  pay_date: yup.date().required(),
  amount: yup.number().integer().required(),
  tax: yup.number().integer().required(),
  net_pay: yup.number().integer().required(),
  status: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
