import React from 'react'
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    book {
        title,
        author

    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    const {book}=data
    console.log(book)
  return(
      <div>
          <h1>Book List</h1>
          <table border="2px">
              <tbody>

              <tr>
                  <th>Title</th>
                  <th>Author</th>
              </tr>
              {
                  book.map((item,index)=>{
                      return(
                          <tr key={index}>
                              <td>{item.title}</td>
                      <td>{item.author}</td>
                          </tr>
                      )
                  })
              }
              </tbody>
          </table>

      </div>
  ) ;
}
export default Books