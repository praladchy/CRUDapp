import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Create1 = () => {
    const [Form, setForm] = useState(
        {
            Name: "",
            Email: "",
            Password: "",
        }
    )
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm((prev) => {
            // console.log(name)
            // console.log(value)
            return { ...prev, [name]: value };
        });
    }





    return (
        <div><form action="/action_page.php">
            <div class="form-group">
                <label for="email">Name:</label>
                <input
                    type="text"
                    class="form-control"
                    id="email"
                    name='Name'
                    value={Form.Name}
                
                    onChange={handleOnChange}
                />
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    name='Email'
                    value={Form.Email}
                    onChange={handleOnChange}
                />
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd"
                    onChange={handleOnChange}
                    name='Password'
                    value={Form.Password}
                />
            </div>
            <div class="checkbox">
                <label><input type="checkbox" /> Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        {Form.Name}<br/>
        {Form.Email}
        </div>

    )
}

export default Create1