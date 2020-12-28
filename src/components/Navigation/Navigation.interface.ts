type TRouteUrl = string;

export interface IRoute {
    readonly label: string;
    readonly path: TRouteUrl
}

export interface IRedirectRoute {
    readonly redirect: boolean;
    readonly from: TRouteUrl
    readonly to: TRouteUrl
}