import s from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.pages}>
            {pages.map(p => {
                return <span key={p} className={currentPage === p ? s.active : s.innactive} onClick={() => { onPageChanged(p) }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;