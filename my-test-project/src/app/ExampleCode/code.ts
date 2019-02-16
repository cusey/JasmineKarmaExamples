// 01 Fundamentals
export class Fundamentals {

    compute(number: any) {
        if (number < 0) {
            return 0;
        }
        return number + 1;
    }

}
// 02 Arrays And Strings
export class ArraysAndStrings {

    greet(name) {
        return 'Welcome ' + name;
    }

    getCurrencies() {
        return ['USD', 'AUD', 'EUR'];
    }
}

// 03 Setup And Teardown
export class SetupAndTeardownComponent {
    totalVotes = 0;

    upVote() {
       this.totalVotes++;
    }
    downVote() {
       this.totalVotes--;
    }
}
