import React, { Component } from 'react';

export default class Projects extends Component {
    
    render() {
        
        return (
        
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Current Projects</h1>
                </div>
                <div>
                    <div className="bd-example">
                        <div className="row  row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <svg className="bd-placeholder-img" width="100%" height={250} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Big Web</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <div className="spinner-border text-danger" role="status">
                                                    <span className="visually-hidden">In Progress...</span>
                                                </div>
                                                <p className="card-text"><small className="text-muted">Under Development<br />Coming Soon</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="..\assets\brand\github.png" className="img-thumbnail rounded mx-auto d-block" alt="GitHub Logo" />
                                        </div>
                                        <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Spltr</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <div className="spinner-border text-danger" role="status">
                                                    <span className="visually-hidden">In Progress...</span>
                                                </div>
                                                <p className="card-text"><small className="text-muted">Under Development<br />Private Repository</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><br />
                </div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Past Projects</h1>
                </div>
                <div>
                    <div className="bd-example">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height={250} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text></svg>
                    </div>
                </div>
                <br />
                <br />
                <div className="bd-example">
                    <blockquote className="blockquote">
                        <p>Built with <span data-feather="heart" /></p>
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
