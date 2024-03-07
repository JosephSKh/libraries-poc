import moment, { Moment } from 'moment';
export class UtilsB {
    public static addHello(val: string, date: Date) {
        return `Hello ${val}, at time ${moment(date).format('DD/MM/YYYY hh-mm')}`;
    }
};