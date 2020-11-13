self.addEventListener('message', (event) => {
    let i = 0;
    console.log(event.data)
    while (i < Number.MAX_SAFE_INTEGER - 1) {
        i += 1;
    }
    self.postMessage(i)
})
