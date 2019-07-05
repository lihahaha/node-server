class Resolve {
    success(msg = 'success', error = 0, code = 200) {
        return {
            msg,
            // code,
            error
        }
    }

    json(data, msg = 'success', error = 0, code = 200) {
        return {
            // code,
            msg,
            error,
            data
        }
    }
}

module.exports = {
    Resolve
}
