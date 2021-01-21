
import{EmployeeModel} from './employee.model';
export interface ActivityModel {
    id?:string;
    date?: string;
    description?: string;
    message?: string;
    title?: string;
    employee?: EmployeeModel;
}