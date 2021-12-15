import Home from "../components/Home"

const baseUrl = 'http://teeble.sytes.net:8000/'

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
    fetch(baseUrl + 'auth/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(e => {
            if (e.status === 400 || e.status === 401) {
                alert("Пароль не содержит цифр")
            } else {
                alert('Успешно!')
                window.location.reload()
            }
        })
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
    return fetch(baseUrl + 'shop/get_all/')
        .then(data => data.json())
}

export const downloadFilteredShop = (data) => {
    fetch(baseUrl + 'shop/get_filtered/', {
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
    fetch(baseUrl + 'auth/users/', {
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
