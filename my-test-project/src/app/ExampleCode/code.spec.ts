import {compute} from './code';

describe('compute', () => {
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        console.log('Compute(-1) = ' + result);
        expect(result).toBe(0);
    });

});
