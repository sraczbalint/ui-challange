import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from "./checkout.style";

const CheckoutPage = ({cartItems,total}) => (
<CheckoutPageContainer>
    <CheckoutHeaderContainer>
        <HeaderBlockContainer>
            <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Remove</span>
        </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItems => (
        <CheckoutItem key={cartItems.id} cartItems={cartItems}/>
    ))}
    <TotalContainer>
        <span>TOTAL: ${total}</span>
    </TotalContainer>
    <WarningContainer>
        *Please use the following cradit card for payments*
        <br />
        4242 4242 4242 4242  - exp: 01/25 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total}/>
</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);