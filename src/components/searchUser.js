export const Search = ({ setter, handler }) => {
    return(
        <form onSubmit={handler}>
            <input placeholder="Search" onChange={(e) => setter(e.target.value)} />
        </form>
    )
}