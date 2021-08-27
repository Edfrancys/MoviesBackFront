

import styles from '../../styles/components/Pagination.module.css'


const Pagination = ({ limit, total, totalPages, offset, setOffset, setPage}) => {

    const MAX_ITEMS = totalPages;
    const MAX_LEFT = (MAX_ITEMS -1) /2;

    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1);        

    console.log('current', current);    

    return (
        <ul className={styles.pagination}>
            {Array.from({ length: MAX_ITEMS })
                .map((_,key) => key + first )
                .map((page) => (
                    <li className={ page === current ? styles.active : null }>
                        <button
                            onClick={() => {
                                setOffset((page -1 ) * limit)
                                setPage(page)
                            }}                        
                        >
                                {page} 
                        </button>
                    </li>
                )
            )}
        </ul>
    )
}

export default Pagination