import React from 'react'

const Pagination = ({ productsParPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsParPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className='default-pagination lab-ul'>
            <li>
                <a href='#' onClick={() => {
                    if (activePage < pageNumbers.length) {
                        paginate(activePage - 1);
                    }
                }}>
                    <i className='icofont-rounded-left'></i>
                </a>

            </li>


            {
                pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`} onClick={() => paginate(number)}>
                        <button className='bg-transparent'>{number}</button>
                    </li>
                ))
            }

            <li>
                <a href='#' onClick={() => {
                    if (activePage < pageNumbers.length) {
                        paginate(activePage + 1)
                    }
                }}>
                    <i className='icofont-rounded-right'></i>
                </a>

            </li>

        </ul>
    )
}

export default Pagination