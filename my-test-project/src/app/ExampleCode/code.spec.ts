import { Fundamentals } from './code';
import { ArraysAndStrings } from './code';
import { SetupAndTeardownComponent } from './code';

describe('Fundamentals', () => {
    it('compute(-1) :should return 0 if input is negative', () => {
        const job = new Fundamentals();
        const result = job.compute(-1);
        console.log('compute(-1) = ' + result);
        expect(result).toBe(0);
    });
});

describe('ArraysAndStrings', () => {
    it('greet(\'cusey\') :should include the name in the message', () => {
        const job = new ArraysAndStrings();
        const result = job.greet('cusey');
        console.log('greet(\'cusey\') = ' + result);
        expect(result).toContain('cusey');
    });

    it('getCurrencies()  :should return the supported currencies', () => {
        const job = new ArraysAndStrings();
        const result = job.getCurrencies();
        console.log('getCurrencies() = ' + result);
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });

});

describe('SetupAndTeardownComponent', () => {
    let component: SetupAndTeardownComponent;

    beforeEach(() => {
        // Set up
        component = new SetupAndTeardownComponent();

    });
    afterEach(() => {
        // tear down
    });

    it('upVotes(): should increment totalVotes when upvoted', () => {
        // Arrange

        // Act
        component.upVote();
        // Assert
        expect(component.totalVotes).toBe(1);

    });

    it('upVotes(): should decrement totalVotes when downvoted', () => {
        // Arrange
        // Act
        component.downVote();
        // Assert
        expect(component.totalVotes).toBe(-1);

    });
});
