import { UtilsB } from 'modb';
export class Utils {
    public static addWorld(val: string, date: Date) {
        return UtilsB.addHello(`${val} World`, date);
    }
};