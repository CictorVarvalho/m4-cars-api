import { ICar, TCreateBody, TUpdateBody } from "../interfaces/cars.interface";

interface ICarsServices{
    create(body: TCreateBody): ICar;
    getMany(search?: string, year?: string): ICar[];
    getOne(id: string): ICar;
    delete(id: string): void;
    update(body: TUpdateBody, id: string): ICar;
}

export class CarsServices implements ICarsServices{
    create(body: TCreateBody): ICar {
        
    }

    getMany(search?: string, year?: string): ICar[] {
        
    }

    getOne(id: string): ICar {
        
    }

    delete(id: string): void {
        
    }

    update(body: Partial<TCreateBody>, id: string): ICar {
        
    }
}