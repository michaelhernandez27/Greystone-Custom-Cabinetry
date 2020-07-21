import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTestimonial, MDBAvatar,  MDBIcon } from "mdbreact";
import "./reviews.css"

const Reviews = () => {
  return (
    <MDBContainer>
      <section className="team-section text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Reviews
          </h2>

          <MDBRow className="text-center">
            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBTestimonial>
                <MDBAvatar className="mx-auto">
                  <img
                    src="BryceHarper.png"
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </MDBAvatar>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Bryce Harper
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Professional Baseball Player
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Greystone did an amazing job renovating my entire kitchen and
                  also creating more storage space with new cabinets in my mud room! 
                  A wonderful professional team!
                </p>
                <div className="orange-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star-half" />
                </div>
              </MDBTestimonial>
            </MDBCol>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBTestimonial>
                <MDBAvatar className="mx-auto">
                  <img
                    src="/BarackObama.jpg"
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </MDBAvatar>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Barack Obama
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Former President of the United States
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Greystone did such an amazing job building and installing our new kitchen in our 
                  Chicago home and were so precise and careful protecting our home during the installation.
                </p>
                <div className="orange-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                </div>
              </MDBTestimonial>
            </MDBCol>
            <MDBCol md="4">
              <MDBTestimonial>
                <MDBAvatar className="mx-auto">
                  <img
                    src="/JenniferLopez.jpg"
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </MDBAvatar>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Jennifer Lopez
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Actress/Singer/Dancer/Fashion Designer/Producer/Businesswoman
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  I am so happy and delighted with the job Greystone did with my new
                  cabinets for my kitchen and laundry room. My house feels so much more 
                  complete now with the fabulous job they did!
                </p>
                <div className="orange-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </MDBTestimonial>
            </MDBCol>
          </MDBRow>
        </section>
    </MDBContainer>
  );
}

export default Reviews;