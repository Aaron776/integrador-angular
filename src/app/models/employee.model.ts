import { AreaModel } from "./area.model";

export interface EmployeeModel {
    ci?: string;
    lastName?: string;
    name?: string;
    password?: string;
    position?: string;
    area?: AreaModel;
}