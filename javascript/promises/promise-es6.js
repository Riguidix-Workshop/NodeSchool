// Challenge from: https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises
function job(data) {
    var promise = new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject('error');
        } else if (data % 2 == 0) { // Even
            setTimeout(() => {
                reject('even');
            }, 2000);
        } else { // Odd
            setTimeout(() => {
                resolve('odd');
            }, 1000);            
        }
    });

    return promise;
}
