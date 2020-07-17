export abstract class ABase64 {
    public abstract randix(length: number): string
    public abstract encode():string
    public abstract decode(input:string): string
    public abstract utf8_decode(utftext:string): string
    protected abstract utf8_encode(string:string): string
}