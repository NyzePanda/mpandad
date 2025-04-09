import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Counter from './Counter';
import Card from './Card'; // Import the Card component

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>My First React Website</h1>
        <p>Welcome to my website built with React!</p>
      </header>
      <main>
        <section className="content-section">
          <h2>About This Site</h2>
          <p>This is a simple website created while learning React.</p>
          <Counter />
          
          <h2>Featured Content</h2>
          <div className="cards-container">
            <Card 
              title="React Basics" 
              content="Learn the fundamental concepts of React including components, props, and state."
              buttonText="Read More"
            />
            <Card 
              title="Styling in React" 
              content="Explore different approaches to styling your React components."
              buttonText="Learn More"
            />
            <Card 
              title="React Hook" 
              content="Understand how React Hooks work and how they can simplify your code."
            />
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} - My First React Site</p>
      </footer>
    </div>
  );
}

export default App;