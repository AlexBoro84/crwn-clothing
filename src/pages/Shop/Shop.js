import React, { Component } from 'react'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

export class Shop extends Component {

    state = {
        collections: SHOP_DATA
    }

    render() {
        return (
            <div className='shop-page'>
                {this.state.collections.map(item => (
                    <CollectionPreview 
                            key={item.id}
                            title={item.title}
                            routeName={item.routeName}
                            items={item.items} />    
                ))}
            </div>
        )
    }
}

export default Shop
