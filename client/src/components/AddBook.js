import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../queries/queries";

function AddBook() {
    let inputName, inputGenre, inputAuthorID;
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation);
    if (error) return <p>Error :(</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({
            variables: {
                name: inputName.value,
                genre: inputGenre.value,
                authorId: inputAuthorID.value
            }, refetchQueries: [
                { query: getBooksQuery }
            ]
        });
        inputName.value = '';
        inputGenre.value = '';
        inputAuthorID.value = '';
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" ref={node => { inputName = node; }} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" ref={node => { inputGenre = node; }} value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={authorId} ref={node => { inputAuthorID = node; }} onChange={(e) => setAuthorId(e.target.value)}>
                    <option value={null}>{loading ? 'Authors loading' : 'Select author'}</option>
                    {data?.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

export default AddBook;
