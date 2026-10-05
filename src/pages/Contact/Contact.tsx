import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div className="container container-contact-cust">
      <div className="row mb-5">
        <div className="col">
          <h3 className="thin-heading mb-4">New York</h3>
          <p>
            9757 Aspen Lane
            <br />
            South Richmond Hill, NY 11419
          </p>
        </div>

        <div className="col">
          <h3 className="thin-heading mb-4">Contact Info</h3>
          <p>
            T: +1 (291) 939 9321
            <br />
            E: info@mywebsite.com
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-12">
          <h3 className="thin-heading mb-4">Message Us</h3>

          <form
            className="mb-5"
            method="post"
            id="contactForm"
            name="contactForm"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </div>

              <div className="col-md-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 form-group">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary rounded-0 py-2 px-4"
                />

                <span className="submitting"></span>
              </div>
            </div>
          </form>

          <div id="form-message-warning" className="mt-4"></div>

          <div id="form-message-success">
            Your message was sent, thank you!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
