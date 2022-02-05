import React from 'react';

const Header = ({countCartItems}) => {
    return (
        <header className='row block center'>
            <div>
                <a href="#/" className="href">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    
                    Cart { ' ' }
                    {
                        countCartItems ? (
                            <button className='badge'>{countCartItems}</button>
                        ) : ('')
                    }

                </a>
                <a href="#/signin">Sign-In</a>
            </div>
        </header>
    );
}

export default Header;
