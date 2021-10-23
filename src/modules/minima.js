let minima = async ({
    url = '',
    method = 'GET',
    headers = {},
    body = {},
    json = false,
    text = false
}) => {
    if (!window.fetch) {
        throw new Error('Fetch not supported in this browser!');
    }

    let requestObject = {
        method: method,
        headers: headers,
    };

    if (method === 'POST') {
        requestObject.body = body;
    }

    let networkResponse = await fetch(url, requestObject);

    if (networkResponse.ok) {
        if (json === true) {
            networkResponse = networkResponse.json();
        } else if (text === true) {
            networkResponse = networkResponse.text();
        }

        return networkResponse;
    } else {
        throw new Error('Request is failed!');
    }
};

export { minima };
