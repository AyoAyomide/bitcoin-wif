
function errorHook({ error, message }) {
    let errorMessage = {};
    if (process.env.NODE_ENV !== 'production' && error) errorMessage.error = error;
    if (message) errorMessage.message = `${message}`;
    throw ({ error, message });
}

module.exports = errorHook;