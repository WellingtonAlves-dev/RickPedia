export interface IResults {
    info: IInfoApi,
    results: Array<IApiCharacteres>
}
export interface IInfoApi {
    count: number,
    next: string,
    prev: string,
    pages: number
}
export interface IApiCharacteres {
    id: Number,
    gender: string,
    image: string,
    name: string,
    status: string,   
}