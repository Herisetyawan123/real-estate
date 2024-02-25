interface ChildrenType {
    children: React.ReactNode;
}

interface IResponseApartment<T>{
    status: boolean;
    message: string;
    data: Array<T>;
}

interface IApartment {
    name: string;
    image: string;
    price: string;
    location: string;
    bed: number;
    bath: number;
    parking: number;
}