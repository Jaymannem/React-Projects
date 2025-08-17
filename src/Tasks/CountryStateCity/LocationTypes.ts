export interface City {
    id: number | string;
    name: string;
}

export interface State {
    id: number | string;
    name: string;
    cities: City[]
}

export interface Country {
    id: number | string;
    name: string;
    states: State[]
}