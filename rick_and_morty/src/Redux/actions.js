import { ADD_FAV, FILTER_FAV, ORDER_FAV, REMOVE_FAV } from "./actions-type";

const add_fav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

const remove_fav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

const filterFav = (gender) => {
    return{
        type: FILTER_FAV,
        payload: gender
    }
 }

const orderFav = (order) => { 
    return{
        type: ORDER_FAV,
        payload: order
    }
}

export { add_fav, remove_fav, filterFav, orderFav}