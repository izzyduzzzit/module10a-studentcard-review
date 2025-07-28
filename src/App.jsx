// Izarra Villareal CS 81 JavaScript Module 10 Assignment 10A: Code Review - StudentCard Component

// GitHub URL: https://github.com/izzyduzzzit/module10a-studentcard-review

// Importing StudentCard component from StudentCard.jsx
import StudentCard from './StudentCard';

// Creating the main App parent component that will pass props down to the imported StudentCard component
function App() {
  return (
    <div>
      <StudentCard // This calls and renders the StudentCard child component and passes the following props to it:
        name="Emily Carter" // This is the name prop passed to the child component
        major="Computer Science" // This is the major prop passed to the child component
        year="Sophomore" // This is the year prop passed to the child component
        bio="I enjoy building interactive web apps and working on open source projects in my spare time." // This is the bio prop passed to the child component
        imageUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face" // This is the imageUrl prop passed to the child component
      />
    </div>
  );
}

export default App; // Exports the default App so that it can also be imported if necessary
