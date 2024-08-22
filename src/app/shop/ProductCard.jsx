import Link from 'next/link'
import Rating from "../components/Rating"
import Image from 'next/image'

const ProductCard = ({ GridList, products }) => {
    return (
        <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
            {products.map((product, i) => (
                <div key={i} className='col-lg-4 col-md-6 col-12'>
                    <div className='product-item'>
                        {/* product images */}
                        <div className='product-thumb'>
                            <div className='pro-thumb'>
                                <Image src={product.img} alt='' width={500} height={500} />
                            </div>

                            {/* Product action links */}
                            <div className='product-action-link'>
                                <Link href={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                                <a href='#'>
                                    <i className='icofont-heart'></i>
                                </a>
                                <Link href="/cart-page">
                                    <i className='icofont-cart-alt'></i>
                                </Link>
                            </div>
                        </div>
                        {/* product content */}
                        <div className='product-content'>
                            <h5>
                                <Link href={`/shop/${product.id}`}>{product.name}</Link>
                            </h5>
                            <p>
                                <Rating />
                            </p>
                            <h6>${product.price}</h6>
                        </div>
                    </div>


                    {/*  list styled */}
                    <div className='product-list-item'>
                        {/* product images */}
                        <div className='product-thumb'>
                            <div className='pro-thumb'>
                                <Image width={500} height={500} src={product.img} alt='' />
                            </div>

                            {/* Product action links */}
                            <div className='product-action-link'>
                                <Link href={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                                <a href='#'>
                                    <i className='icofont-heart'></i>
                                </a>
                                <Link href="/cart-page">
                                    <i className='icofont-cart-alt'></i>
                                </Link>
                            </div>
                        </div>
                        {/* product content */}
                        <div className='product-content'>
                            <h5>
                                <Link href={`/shop/${product.id}`}>{product.name}</Link>
                            </h5>
                            <p>
                                <Rating />
                            </p>
                            <h6>${product.price}</h6>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ProductCard