import { gql, graphql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
{
    books{
        name,
        id
    }
}
`

function BookList(props) {
    const { loading, error, data } = useQuery(getBooksQuery);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);
    return (
        <div>
            <ul id="book-list">
                <li>Book name</li>
            </ul>
        </div>
    );
}

export default BookList;
