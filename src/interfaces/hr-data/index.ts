import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface HrDataInterface {
  id?: string;
  employee_id: string;
  performance_rating: number;
  training_completed: string;
  disciplinary_actions: string;
  promotion_status: string;
  termination_date?: any;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface HrDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  training_completed?: string;
  disciplinary_actions?: string;
  promotion_status?: string;
}
