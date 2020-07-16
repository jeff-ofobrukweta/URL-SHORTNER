export interface Config {
    rateLimit: {
        windowMs: number // 15 minutes
        max: number // limit each IP to 30 requests per windowMs
        handler: (req: any, res: any, next: any) => any
        message?: string
    }
}