const URL = 'http://localhost:8000/'

const exportedObjects = {
    URL
}
export default exportedObjects

export const createUser = (data) => {
    return fetch(URL + 'auth/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(data => data.json())
}

export const authUser = (data) => {
    return fetch(URL + 'auth/jwt/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(e => e.json())
}

export const downloadShop = () => {
    return fetch(URL + 'shop/get_all_kigurumi/')
        .then(data => data.json())
}

export const downloadFilteredShop = (data) => {
    fetch(URL + 'shop/get_filtered_kigurumi/', {
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
    fetch(URL + 'shop/create_order/', {
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


