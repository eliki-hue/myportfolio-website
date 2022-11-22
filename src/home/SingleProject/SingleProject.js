import React from 'react'
import "./singleProject.css"
import Navigation from '../../navbar/Navbar';

function SingleProject({img1, img2, img3, category, client, date, url, description}) {
  return (
    <div>
        <div className='container-fluid single-project-header'>
            <nav>
                <Navigation/>
            </nav>
            <div className='text-center '>
                <h1>PROJECT DETAILS</h1>
            </div>

        </div>
        <div className='container single-project-content d-flex'>
            <div className='col-8 carousel-images '>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner   ">
                        <div className="carousel-item active">
                        <img className="d-block w- carousel-img" src={img1} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w- carousel-img" src={img2} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w- carousel-img" src={img3} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon control" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon control" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
            <div className='col-4 single-progect-details m-4'>
                <div className='project-info mb-4' >
                    <p><strong>Category: </strong>{category}</p>
                    <p><strong>Client: </strong>{client}</p>
                    <p><strong>Project date: </strong>{date}</p>
                    <p><strong>Visit:  </strong><a href={url}>Live Link</a></p>
                </div>
                <div className='project-description p-2'>
                    <h2>Description</h2>
                    <p>{description}</p>
                </div>

            </div>

        </div>
        <div className='container-fluid text-center text-white single-projectfooter'>
            <h5>All Rights Reserved</h5>
            <h5>Designed by Elijah Kiragu</h5>
        </div>
    </div>
  )
}

export default SingleProject;