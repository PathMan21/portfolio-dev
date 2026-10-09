import "../Contact/Contact.css";

const Contact = () => {

  return (
    <div className="container container-contact-cust">
      <div className="row mb-5">

      <div className="row justify-content-center">
        <div className="col-md-12">
        


          <div className="mb-4 text-center"> <a
            href="mailto:manon.lafosse1@gmail.com?subject=Contact%20depuis%20mon%20portfolio"
          >
            <button className="button-55" role="button">M'envoyer un email ?</button></a>
          </div>

          <div className="mb-4 text-center">
            <a
              href="www.linkedin.com/in/manon-lafosse-848746213
"
            >

              <button className="button-55" role="button">Me parler sur linkedin ?</button></a></div>


        </div>
      </div>
      </div>


    </div>
  );
};

export default Contact;
