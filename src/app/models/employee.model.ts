import { AreaModel } from "./area.model";

export interface EmployeeModel {
    ci?: string;
    last_name?: string;
    name?: string;
    password?: string;
    position?: string;
    area?: AreaModel;
}