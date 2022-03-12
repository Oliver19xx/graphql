import BookList from "./components/BookList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <h1>Reading List</h1>
      <BookList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
