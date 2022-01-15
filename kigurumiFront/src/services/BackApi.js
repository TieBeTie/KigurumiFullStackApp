const baseUrl = 'http://localhost:8000/'

export const createUser = (data) => {
    return fetch(baseUrl + 'auth/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
}

export const authUser = (data) => {
    return fetch(baseUrl + 'auth/jwt/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(e => e.json())
}

export const downloadShop = () => {
    return fetch(baseUrl + 'shop/get_all_kigurumi/')
        .then(data => data.json())
}

export const downloadFilteredShop = (data) => {
    fetch(baseUrl + 'shop/get_filtered_kigurumi/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(e => {
            if (e.status === 400 || e.status === 401) {
            } else {
                window.location.reload()
            }
        })
}


export const createOrder = (data) => {
    fetch(baseUrl + 'shop/create_order/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(e => {
            if (e.status === 400 || e.status === 401) {
                alert("Либо корзина пуста, либо данные введины некорректно")
            } else {
                window.location.reload()
            }
        })
}


