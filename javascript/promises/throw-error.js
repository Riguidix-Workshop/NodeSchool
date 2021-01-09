function parsePromised (data) {
    return new Promise((resolve, reject) => {
        try {
            var JSONparsed = JSON.parse(data);

            resolve(JSONparsed);
        } catch (error) {
            reject(error);
        }
    });
}

parsePromised(process.argv[2])
    .then(null, (error) => console.log(error.message));

