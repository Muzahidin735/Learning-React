import * as React from 'react';

const Item = (props) =>
{
  console.log("Item renders");
  return (
    <li key={props.item.objectID}>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
}

const List = (props) =>
{
  console.log("List renders");
return(
  <ul>
      {props.list.map((item) => (
          <Item item = {item}/>
      ))}
  </ul>
);
}


const Search = (props) => 
{
  const handleChange = (event) =>
  {
    props.onSearch(event);
  }

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange}/>

      <p>
        Searching for <strong>{props.searchTerm}</strong>.
      </p>
    </div>
  );
}

function App() {
      
  const stories = [
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) =>
  {
    setSearchTerm(event.target.value);
  }

  const searchedStoreis = stories.filter((item) =>
                             searchTerm.toLowerCase() === item.title.toLowerCase()
                          );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      
      <Search onSearch = {handleSearch} searchTerm = {searchTerm}/>

      <hr/>
      <List list = {searchedStoreis}/>
    </div>
  );
}

export default App;
