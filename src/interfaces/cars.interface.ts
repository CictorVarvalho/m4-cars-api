export interface ICar{
    id: number;
    model: string;
    km: number;
    year: number;
    brand: string;
    price?: number;
    createAt: Date;
    updateAt: Date;
}

export type TCreateBody = Omit<ICar, "id" | "creatAt" | "updateAt">;
export type TUpdateBody = Partial<TCreateBody>