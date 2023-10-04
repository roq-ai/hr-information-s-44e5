const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  'hr-data': 'hr_data',
  payrolls: 'payroll',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
