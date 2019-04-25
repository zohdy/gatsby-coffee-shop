import React from "react"
import Title from "../Global/Title"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="Contact Us"/>
      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form action="https://formspree.io/peterzohdy@hotmail.com" method="POST">
          { /* Name */ }
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="John Smith"
            />
          </div>
          { /* Email */ }
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="email@email.com"
            />
          </div>
          { /* Description */ }
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              rows="5"
              placeholder="Your description goes here..."
            />
            { /* Submit */ }
            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact