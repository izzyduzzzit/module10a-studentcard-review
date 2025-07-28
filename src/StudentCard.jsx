// Izarra Villareal CS 81 JavaScript Module 10 Assignment 10A: Code Review - StudentCard Component

// GitHub URL: https://github.com/izzyduzzzit/module10a-studentcard-review

// Importing useState from React library
import { useState } from "react";

// Creating StudentCard child component that accepts props or properties for name, major, year, bio, and imageUrl
function StudentCard(props) {
  const { name, major, year, bio, imageUrl } = props; // Constant variable that accepts the props input as name, major, year, bio, imageUrl
  // const [showBio, setShowBio] = React.useState(false); was throwing an error becuase "React" was undefined
  // I removed "React." in the line; see below:
  const [showBio, setShowBio] = useState(false); // Initializing the useState function for showing or hiding the bio

  const toggleBio = () => { // Toggle function that will toggle the bio hide or show options via setting the state using setShowBio
    setShowBio(!showBio);
  };

  return (
    <div style={{ // Inline style markup for HTML that the component returns
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={imageUrl} // Prop that displays profile photo via url
        alt={name + "'s profile"} // Prop that display's person's name + "profile" as alt text for the image
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h2 style={{ margin: '0', fontSize: '22px' }} /* Uses prop for name to display name */ >{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }} /* Uses props for major and year to display major and year */ >{major} – {year}</p>
      <button onClick={toggleBio} style={{ /* This button triggers the toggleBio function created above to show or hide bio using setShowBio */
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }} /* Uses the prop for bio to show or hide this section if button is clicked */ >{bio}</p>}
    </div>
  );
}

export default StudentCard; // Exporting StudentCard component to make it available for import
