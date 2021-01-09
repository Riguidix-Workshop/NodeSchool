function all (firstPromise, secondPromise) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        let result_array = [];

        firstPromise.then((result) => {
            result_array[0] = result;

            counter++;

            if (counter == 2) {
                resolve(result_array);
            }
        });

        secondPromise.then((result) => {
            result_array[1] = result;

            counter++;

            if (counter == 2) {
                resolve(result_array);
            }
        });
    });
}

all(getPromise1(), getPromise2()).then(console.log);
