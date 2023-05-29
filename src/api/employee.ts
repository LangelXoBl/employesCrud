import type { IEmploye } from "@/models/IEmploye";
import conection from "./api";

export const getListEmployees = async (): Promise<IEmploye[]> => {
    try {
        const response = await conection("Empleados");
        const json: IEmploye[] = await response.json()
        return json;
    } catch (error) {
        console.log(error);
        return []


    }
}
