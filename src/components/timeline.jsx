import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">

                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Development Analyst | NTT DATA<span> 2017-Present</span></h2>
                       <p> I am working in NTT DATA since 2017 as a Software Development Analyst. I have been involved in API development, Data Migration and Full stack development processes.</p>
                        </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Certification | Oracle JAVA 8 <span> December 2016</span></h2>
                        <p>I have done certification in Orcale JAVA 8 OCJA and OCJP.</p>
                         </div>
                    </div>
                  </article>

                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Post Graduation | International Institute of Information Technology Bangalore<span> 2020-2021</span></h2>
                       <p> I am pursuing Post Graducation from International Institute of Information Technology Bangalore with Data Science as my major.</p>
                        </div>
                    </div>
                  </article> */}

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Under Graduation | AKTU, Lucknow <span> 2013-2017</span></h2>
                       <p>I have done my undergraduation- Bachlore OF Engineering from AKTU with Computer Science and Engineering as my major. </p>
                        </div>
                    </div>
                  </article>

                  
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
