import { AreaModel } from './area.model';
export interface UserModel {
    ci?: string;
    name?: string;
    lastName?: string;
    password?: string;
    position?: string;
    area?: AreaModel;
}