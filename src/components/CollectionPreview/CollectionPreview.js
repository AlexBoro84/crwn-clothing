import React from 'react'
import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const collectionPreview = (props) => (
    <div className="collection-preview">
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
            {props.items
                .filter((item, i) => i < 4)
                .map(item => (
                    <CollectionItem 
                        key={item.id} 
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.price}
                    />
            ))}
        </div>    
    </div>
)
    

export default collectionPreview
