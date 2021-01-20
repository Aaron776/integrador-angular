
import{EmployeeModel} from './employee.model';
export interface ActivityModel {
    id?:string;
    date?: Date;
    description?: string;
    message?: string;
    title?: string;
    employee_ci?: EmployeeModel;
}