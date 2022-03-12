import { gql, graphql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
{
    books{
        name,
        id
    }
}
`

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    
    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);
    const books = data.books;

    return (
        <div>
            <ul id="book-list">
                {books.map(book => <li key={book.id}>{book.name}</li>)}
            </ul>
        </div>
    );
}

export default BookList;
