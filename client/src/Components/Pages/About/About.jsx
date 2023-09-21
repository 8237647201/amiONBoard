import React from 'react';
import Typography from '@mui/material/Typography';

export default function About() {
  const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '100px',
    textAlign: 'center',

  };

  const sectionStyle = {
    marginBottom: '60px',
  };

  const bigFontStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'black',
    color: '#ff9000', 
  };

  const smallTextStyle = {
    fontSize: '20px',
    
  };

  const ultimateGoalStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: '50px',
    marginBottom: '10px', 
    color: '#ff9000', 
  };

  const taglineStyle = {
    fontSize: '16px',
    textAlign: 'left',
    paddingLeft: '50px',
    paddingRight: '50px',
    marginBottom: '20px',
  };

  const teamSectionStyle = {
    marginTop: '50px',
  };

  const teamHeaderStyle = {
    fontSize: '32px',
    fontWeight: 'bold', 
    marginBottom: '20px', 
    color: '#ff9000', 
  };

  const teamDescriptionStyle = {
    fontSize: '18px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <Typography style={bigFontStyle}>We're on a mission to make</Typography>
        <Typography style={smallTextStyle}>
        "Our mission is to provide a solution to transportation challenges for our college students. 
        You can take advantage of our complimentary service within our campus and enjoy the best rides available."
        </Typography>
      </div>
      <div style={sectionStyle}>
        <Typography style={ultimateGoalStyle}>Our ultimate goal</Typography>
        <Typography style={taglineStyle}>
        "We aspire to address one of the most common and prevalent issues faced by everyone. 
        As a student traveler, limited funds often hinder your ability to explore, but now it's easier and more affordable than ever. 
        You can quickly book your inaugural ride in a matter of moments. Waste no time - reserve your first ride now."
        </Typography>
      </div>
      <div style={sectionStyle}>
        <Typography variant="h1" style={teamHeaderStyle}>
          Team
        </Typography>
        <Typography style={teamDescriptionStyle}>
          We are the Team AmiOnBoard to give all the possible solution to aur students.
        </Typography>
      
      </div>
    </div>
  );
}
