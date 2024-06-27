import React from "react";
import Links from "./Links";  // Import Links component

function About(props) {
  if (!props.bio) {
    return <div>No bios found</div>
  } else {

    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* Pass github and linkedin props to Links component */}
        <Links github={props.github} linkedin={props.linkedin} />
      </div>
    );
  }
}

export default About;