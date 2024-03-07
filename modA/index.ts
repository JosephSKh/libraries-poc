import { UtilsB } from 'modb';
export class Utils {
    // @ts-ignore
    public static addWorld(val) {
        return UtilsB.addHello(`${val} World`);
    }
};