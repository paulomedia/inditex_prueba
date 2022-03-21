const BASE_URL = 'https://front-test-api.herokuapp.com/'

export const getAll = () => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}api/product/`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(products => resolve(products))
        .catch(error => reject(error));
    })
}

export const getProduct = id => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}api/product/${id}`, {
            method: 'GET'
        })
        .then(product => resolve(product.json()))
        .catch(error => reject(error));
    })
}
 
export const addToCart = ({ data }) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}api/cart`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => resolve(response.json()))
        .catch(error => reject(error));
    }) 
}
