
const ProductCard = () => {

    return (
        <div className={`w-[400px] | flex flex-col |  | `}>
            <div>
                <img 
                    src="/src/assets/images/image-product-mobile.jpg" 
                    alt="Product Image" 
                    className={` | rounded-t-2xl |  | `}
                />
            </div>

            <div className={` px-8 py-7 | bg-neutral-white rounded-b-2xl |  | `}>
                <span className={` | text-sm font-montserrat font-medium uppercase text-neutral-dark-grayish-blue tracking-[4px] |  | `}>
                    Perfume
                </span>

                <h3 className={`mt-2 mb-4 | text-neutral-very-dark-blue font-fraunces font-bold text-3xl |  | `}>
                    Gabrielle Essence Eau De Parfum
                </h3>

                <p className={` | text-[10px] text-neutral-dark-grayish-blue font-montserrat font-medium |  | `}>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                    Perfumer-Creator for the House of CHANEL.
                </p>

                <div>
                    <span>$149.99</span>
                    <span>$169.99</span>
                </div>

                <button>
                    <img src="/src/assets/images/icon-cart.svg" alt="" />
                    <span></span>
                </button>
            </div>
        </div>
    )

}

export default ProductCard