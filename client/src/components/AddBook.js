import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getAuthorsQuery } from "../queries/queries";

function AddBook() {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const { loading, error, data } = useQuery(getAuthorsQuery);

    if (error) return <p>Error :(</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, genre, authorId);
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                    <option>{loading ? 'Authors loading' : 'Select author'}</option>
                    {data?.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

export default AddBook;
