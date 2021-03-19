import React, { Component } from 'react';

export default class Homepage extends Component {

  render() {

    return (

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Welcome to my online portfolio!</h1>  
        </div>
        <div>
          <p>A bit about myself: Fell in love with code. </p>
          <ul>
            <p>You can view my resume below.
              <a className="nav-link" href="https://drive.google.com/file/d/1erJScR2901u1bGGrb6Bo9twtAtuL2MOh/view?usp=sharing" style={{width: 'fit-content'}}>
                <span data-feather="file-text" />
                Resume
              </a></p>
          </ul>
          <ul>
            <p>I love challenging myself with programming challenges and constantly improving my coding abilities during my free time! LeetCode warrior status incoming!
              <a className="nav-link" href="https://leetcode.com/chibuikem7/" style={{width: 'fit-content'}}>
                <span data-feather="code" />
                LeetCode
              </a></p>
          </ul>
          <ul>
            <p>Sometimes I build things for fun. Check out some of my personal projects here!
              <a className="nav-link" href="..\dashboard\projects.html" style={{width: 'fit-content'}}>
                <span data-feather="layers" />
                Projects
              </a>
            </p>
          </ul>
          <ul>
            <p>Throughout my time working both professionally and personally I've had the opportunity to learn and use various tools. Below are some of the tools I have proficiency with building and breaking apps; 
            </p>
            <div className="mx-auto" style={{width: '100%'}}>
              <img src="..\assets\brand\docker.png" height={75} width={75} alt="docker logo" />
              <img src="..\assets\brand\react.png" height={75} width={110} alt="react logo" />
              <img src="..\assets\brand\kubernetes.png" height={75} width={75} alt="kubernetes logo" />
              <img src="..\assets\brand\jenkins.png" height={75} width={75} style={{marginLeft: '12px'}} alt="jenkins logo" />
              <img src="..\assets\brand\bootstrap.png" height={75} width={85} style={{marginLeft: '5px'}} alt="bootstrap logo" />
              <img src="..\assets\brand\mongodb.png" height={75} width={85} alt="mongodb logo" />
              <img src="..\assets\brand\aws.png" height={75} width={75} alt="aws logo" />
              <img src="..\assets\brand\metasploit.png" height={75} width={75} style={{marginLeft: '10px'}} alt="metasploit logo" />
            </div>
            <p style={{marginTop: '10px'}}>Some more of my other hobbies and interests include; Music, Art, Dance, Finance, &amp; Crypto! 
            </p>
          </ul>
        </div>
        <div className="bd-example">
          <blockquote className="blockquote">
            <p>Built with  <span data-feather="heart" /></p>
            <footer className="blockquote-footer">Tech Stack: <cite title="Source Title">React (Frontend), Hosted with GitHub Pages, Bootstrap v5 (Frontend UI), Testing and Continous Integration done with (something CI)</cite></footer>
          </blockquote>
          <p>Connect with me on LinkedIn!<br />
            <a href="https://www.linkedin.com/in/chibuikem/"><img src="..\assets\brand\linkedin.png" height={75} width={75} style={{marginTop: '10px'}} alt="linkedin logo"/></a>
          </p>
        </div>
      </main>
    )
  }
}
