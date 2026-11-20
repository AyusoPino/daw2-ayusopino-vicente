export function get(url) {
    return fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwttoken')
            },
        }    
    );       
}

export function post(url, cuerpo) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: cuerpo
    });
}

export function put(url, cuerpo) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: cuerpo
    });
}

export function del(url) {
    return fetch(url, {
        method: 'DELETE'
    });
}