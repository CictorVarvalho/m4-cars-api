interface ICarsServices{
    create(): void;
    getMany(): void;
    getOne(): void;
    delete(): void;
    remove(): void;
}

export class CarsServices implements ICarsServices{

}