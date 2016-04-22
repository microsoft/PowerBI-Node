export class Util {
    public static getUnixTime(date: Date): number {
        return date.getTime() / 1000 | 0;
    }
}