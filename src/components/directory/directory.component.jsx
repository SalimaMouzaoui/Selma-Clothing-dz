import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                title: 'hats',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61IxpKIPAgL._AC_UL1001_.jpg',//'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
                },
                {
                title: 'jackets',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0752/6435/products/4_5d77918b-6610-4bbb-b373-8b7af0698102.jpg?v=1621003413',//'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
                },
                {
                title: 'sneakers',
                imageUrl: 'https://images.theconversation.com/files/303723/original/file-20191126-180279-gvmxgl.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C6989%2C4892&q=45&auto=format&w=926&fit=clip',//'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: ''
                },
                {
                title: 'womens',
                    imageUrl: 'https://blog.asana.com/wp-content/post-images/women.jpg', //'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: ''
                },
                {
                title: 'mens',
                    imageUrl: 'https://www.vuelio.com/uk/wp-content/uploads/2020/07/Mens-Fashion.jpg', //'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: ''
            },
            ]
        }
    }

    render() {
        return (
        <div className="directory-menu">
                {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </div>
        )
    }
}

export default Directory;