import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JP2f2C38Az3qmYxz6QCggYnfc2P1CHqVI3r76zFmqA3qS4LXEYBffQ7cpRDyBA03SZdIshm81x2vl4mjygV5xYr00xhlQjR1S'

   const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Selma Clothing DZ.'
            billingAddress
            shippingAddress
            image= 'payFavicon.ico' //'https://svgshare.com/i/CUz.svg'
            description={`Your tatal is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        
        />
    )
}

export default StripeCheckoutButton;