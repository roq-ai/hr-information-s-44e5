interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Employee', 'Payroll Administrator', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read employee information',
    'Read payroll information',
    'Read HR data',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage employee information',
    'Manage payroll information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8d74c1bf-7403-44a3-aed1-892fea4ce8c8',
};
