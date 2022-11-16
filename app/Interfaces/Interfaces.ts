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
    id: number,
    gender: string,
    image: string,
    name: string,
    status: string,   
    episode: string[]
}

export interface IResultsEps {
    info: IInfoApi,
    results: Array<IEpisode>
}
export interface IEpisode {
    id: number,
    name: string,
    episode: string
}