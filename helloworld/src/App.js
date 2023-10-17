import React from 'react';
import './App.css';
import ClickTracker from './ClickTracker';

function App() {
  return (
    <div className="App">
      <h1>Click Tracker</h1>
      <ClickTracker />
    </div>
  );
}

export default App;


// import React from 'react';
// import './App.css';
// import Counter from './Counter';

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import ListRenderer from './ListRenderer';

// function App() {
//   const myList = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

//   return (
//     <div className="App">
//       <h1>List Renderer App</h1>
//       <ListRenderer items={myList} />
//     </div>
//   );
// }

// export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       email: '',
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform actions with the form data here
//     console.log('Form submitted with data:', this.state);
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Basic Form</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;







// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: "" });

//   useEffect(() => {
   
//     axios.get("http://localhost:3001/posts")
//       .then((response) => {
//         setPosts(response.data);
//       })
      
//   }, []);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   const handleAddPost = () => {
//     // Send a POST request to add a new post
//     axios.post("http://localhost:3001/posts", newPost)
//       .then((response) => {
//         // Update the state with the new post
//         setPosts([...posts, response.data]);
//         setNewPost({ title: "" }); 
//       })
//       .catch((error) => {
//         console.error("Error adding post:", error);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           name="title"
//           placeholder="New Post Title"
//           value={newPost.title}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleAddPost}>Add Post</button>
//       </div>
//     </div>
//   );
// }

// export default App;
