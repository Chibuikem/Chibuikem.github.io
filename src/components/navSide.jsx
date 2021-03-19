import React, { Component } from 'react'

export default class NavSide extends Component {

  render() {
    
    return (

      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <div className="bd-example">
            <img src="..\assets\brand\image0.jpeg" style={{width: '200px', marginLeft: '8px'}} className="rounded-pill" aria-hidden alt="cartooned picture of myself" />
          </div>
          <li className="nav-item">
            <button className="btn btn-outline-light">
              <a className="nav-link active" aria-current="page" href="..\dashboard\index.html#top">
                <span data-feather="user-check" />
                About Me
              </a>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light">
              <a className="nav-link" href="https://drive.google.com/file/d/1erJScR2901u1bGGrb6Bo9twtAtuL2MOh/view?usp=sharing">
                <span data-feather="file-text" />
                Resume
              </a>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="This section is under development. Please refer to resume">
              <a className="nav-link" href="index.html#top">
                <span data-feather="briefcase" />
                Work Experience
              </a>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light">
              <a className="nav-link" href="..\dashboard\projects.html">
                <span data-feather="layers" />
                Projects
              </a>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light">
              <a className="nav-link" href="https://leetcode.com/chibuikem7/">
                <span data-feather="code" />
                LeetCode
              </a>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light">
              <a className="nav-link" href="https://github.com/Chibuikem">
                <span data-feather="github" />
                GitHub
              </a>
            </button>
          </li>
        </ul>
      </div>
    )
  }    
}
