export interface IConfig {
        windowMs: number // 15 minutes
        max: number // limit each IP to 30 requests per windowMs
        statusCode:number
        store:any
        handler: (req: any, res: any, next: any) => any
        message?: string
}