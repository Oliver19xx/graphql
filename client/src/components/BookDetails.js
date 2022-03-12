import { useQuery } from "@apollo/client";
import { getBookQuery, getBooksQuery } from "../queries/queries";

function displayBookDetails(data) {
    if (!data) return (<div>No book selected</div>);
    
    const { book } = data;
    return (
        <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author</p>
            <ul>
                {book.author.books.map(book => <li key={book.id}>{book.name}</li>)}
            </ul>
        </div>
    )


};
function BookDetails(props) {
    const { loading, error, data } = useQuery(getBookQuery, {
        variables: { id: props.bookId }
    });
    console.log(data);



    return (
        <div id="book-details">
            {displayBookDetails(data)}
        </div>
    );
}

export default BookDetails;
