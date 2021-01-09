function attachTitle (name) {
    return 'DR. ' + name;
}

Promise
    .resolve('MANHATTAN')
    // .then((result) => attachTitle(result))
    .then(attachTitle)
    .then((attachedResult) => console.log(attachedResult));