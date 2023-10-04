import * as yup from 'yup';

export const hrDataValidationSchema = yup.object().shape({
  performance_rating: yup.number().integer().required(),
  training_completed: yup.string().required(),
  disciplinary_actions: yup.string().required(),
  promotion_status: yup.string().required(),
  termination_date: yup.date().nullable(),
  employee_id: yup.string().nullable().required(),
});
