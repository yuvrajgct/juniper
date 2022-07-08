const baseUrl = "http://mis-sandbox.bluone.in/services/client";

// --------------------------------getclientanniversary-------------------------
export const getclientanniversary = (payload) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //   Authorization: "Bearer my-token",
            //   "My-Custom-Header": "foobar",
        },
        body: JSON.stringify(payload),
    };

    return fetch(`${baseUrl}/client-anniversary`, requestOptions).then(
        (response) => response.json()
    );
};

// --------------------------------getClienttype -------------------------
export const getClienttype = (payload) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    return fetch(`${baseUrl}/type`, requestOptions).then((response) =>
        response.json()
    );
};

// --------------------------------getTopclient-------------------------
export const getTopclient = (payload) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //   Authorization: "Bearer my-token",
            //   "My-Custom-Header": "foobar",
        },
        body: JSON.stringify(payload),
    };

    return fetch(`${baseUrl}/top-client`, requestOptions).then((response) =>
        response.json()
    );
};

// --------------------------------getLowestclient-------------------------

export const getLowestclient = (payload) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //   Authorization: "Bearer my-token",
            //   "My-Custom-Header": "foobar",
        },
        body: JSON.stringify(payload),
    };

    return fetch(`${baseUrl}/lowest-client`, requestOptions).then(
        (response) => response.json()
    );
};

// --------------------------------Pending invoices-------------------------

export const getPendinginvoices = (payload) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //   Authorization: "Bearer my-token",
            //   "My-Custom-Header": "foobar",
        },
        body: JSON.stringify(payload),
    };

    return fetch(`${baseUrl}/pending-invoices`, requestOptions).then((response) =>
        response.json()
    );
};

// --------------------------------getTopservices-------------------------

export const getTopservices = (payload) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //   Authorization: "Bearer my-token",
            //   "My-Custom-Header": "foobar",
        },
        body: JSON.stringify(payload),
    };

    return fetch(`${baseUrl}/top-services`, requestOptions).then(
        (response) => response.json()
    );
};
// ----------------------------------getMissingtaxtype---------------------------------

export const getMissingtaxtype = (payload) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //   Authorization: "Bearer my-token",
            //   "My-Custom-Header": "foobar",
        },
        body: JSON.stringify(payload),
    };

    return fetch(`${baseUrl}/missing-taxtype`, requestOptions).then(
        (response) => response.json()
    );
};
