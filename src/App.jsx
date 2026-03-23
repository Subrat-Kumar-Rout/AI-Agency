// import React from 'react'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// const App = () => {
//   return (
//     <BrowserRouter>
//     <div>
//       <h1>hello</h1>
//       <Routes>
//       <Route path="/about" element={<About />} />
//       <button>NEXT</button>
//       </Routes>
//     </div>
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import About from './About.jsx';

const App = () => {
  const navigate = useNavigate(); // This is the "hook" to change pages

  return (
    <div>
      <nav>
        {/* Use "to" instead of "href" */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <h1>Hello</h1>

      <Routes>
        <Route path="/" element={
          <div>
            <p>Home Page Content</p>
            {/* When clicked, it navigates to /about */}
            <button onClick={() => navigate('/about')}>NEXT</button>
          </div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;