import Home from "../components/Home"

const baseUrl = 'http://localhost:8000/'

function getBaseURL() {
    return baseUrl
}

export const getPosts = () => {
    fetch(baseUrl + 'get_all/')
        .then(data => data.json())
        .then(data => console.log(data))
}

export const drop = (id) => {
    fetch(baseUrl + 'drop/${id}', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
}

export const create = (data) => {
    fetch(baseUrl + 'create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}

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
                alert("Не удалось найти")
            } else {
                alert('Оформлено!')
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
                alert("Не удалось оформить заказ")
            } else {
                alert('Оформлено!')
                window.location.reload()
            }
        })
}


