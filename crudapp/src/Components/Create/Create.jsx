import React, { useState } from 'react'
import  axios  from 'axios';

const Create = () => {
  const [formName, setFormName] = useState();
  const [formEmail, setFormEmail] = useState();
  console.log(formEmail)
  const header = {
    "Access-Control-Allow-Origin": "*"
    // Add any auth token here
    // authorization: "your token comes here",
  };
  const Handlesubmite = (e) => {
    console.log("sumbite")
    e.preventDefault();
    
    axios({
          // Endpoint to send files
          url: "https://mockapi.io/projects/66156c5fb8b8e32ffc7ae7db#",
          method: "POST",
          headers: {
            // Add any auth token here

            "Acess-control-allow-origin": "*"
          },

          // Attaching the form data
          formName: formName,
          formEmail: formEmail,
        })

    axios.post("https://mockapi.io/projects/66156c5fb8b8e32ffc7ae7db#",
      {
        name: formName,
        email: formEmail,
        header,
      });

  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Name</label>
          <input type="text"
            name='Name'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formName}
            
            onChange={(e) => setFormName(e.target.value)} />
    
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Email</label>
          <input type="Email"
            name='Email'
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setFormEmail(e.target.value)}
            value={formEmail} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label"
            for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={Handlesubmite}>Submit</button>
      </form>

    </div>
  )
}

export default Create