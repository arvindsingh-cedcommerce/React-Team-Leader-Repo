import React from 'react'
import { ACTIONS } from './Actions';

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.TITLE:
            return{
                ...state,
                title:state.title=action.payload
            }
        case ACTIONS.DESCRIPTION:
            return{
                ...state,
                description:state.description=action.payload
            }
        case ACTIONS.HANDLING_TIME:
            return{
                ...state,
                handling_time:state.handling_time=action.payload
            }
        case ACTIONS.AMAZON_PARENT_SKU:
           return {
            ...state,
            amazon_parent_sku:state.amazon_parent_sku=action.payload
           }
        case ACTIONS.BARCODE:
            return {
                ...state,
                barcode:state.barcode=action.payload
            }
        case ACTIONS.ADD_AMAZON_CATEGORY:
           return {
            ...state,
            add_amazon_category:state.add_amazon_category=action.payload
           }
        case ACTIONS.IMAGE_SELECTION:
            return {
                ...state,
                image_selection:state.image_selection=action.payload
            }
        default:
            return state;
    }
}

export default reducer