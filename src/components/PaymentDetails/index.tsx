import {FormEvent} from 'react';

import {toast, Toaster} from 'react-hot-toast';
import './styles.css'

export function PaymentDetails() {
    function handlePayment(event: FormEvent){
        event.preventDefault();
        toast.success('Payment confirmed');
    }
    return (
        <main>
            <h2>Payment details</h2>

            <section>
                <form action="">
                    <div className='userData'>
                        <div>
                            <span>Email address</span>
                            <input type="email" placeholder='Your email'/>
                        </div>

                        <div>    
                            <span>Credit Card Number</span>
                                <input type="number" placeholder='XXXX XXXX XXXX XXXX' />
                        </div>

                        <div className='cardCodes'>
                            <div>
                                <span>Expiry Date</span>
                                <input type="text" name="" id="" placeholder='mm/yy'/>
                            </div>
                            <div>
                                <span>CVV</span>
                                <input type="number" name="" id="" placeholder='xxx' />
                            </div>
                        </div>

                        <div className='promoCode'>
                            <div>
                                <input type="checkbox" name="" id="checkboxInput" />
                                <span>I've a promo code</span>
                            </div>
                        </div>
                    </div>
                    <div className='orderSummary'>
                        <div>
                            <p>Subtotal</p>
                            <span>$96</span>
                        </div>
                        <div>
                            <p>Platform Fee</p>
                            <span>$4</span>
                        </div>
                        <div className='totalAmount'>
                            <p>Total Amount</p>
                            <span>$100</span>
                        </div>

                        <button
                            onClick={handlePayment}
                        >
                            Make payment
                        </button>
                    </div>
                </form>
                <Toaster 
                    position="top-center"
                />
            </section>
            
        </main>
    )
}