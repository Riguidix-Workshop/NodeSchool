// Challenge from: https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises
function job(data) {
    var promise = new Promise((resolve, reject) => {
        if (isNaN(data)) reject('error');
    });

    promise.catch((error) => console.log(error));

    /**
     * Validating the Number methods
     */
    if (data % 2 == 0) { // Even        
        promise = Promise.reject('even');
    } else { // Odd
        promise = Promise.reject('odd');
    }

    return promise;
}

job('string');
job(2);
job(3);
