import { useState } from "react";


function Form() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState(""); 
    // const [phone, setPhone] = useState(""); 
    // const [phoneType, setPhoneType] = useState(""); 
    // const [staff, setStaff] = useState("");
    // const [bio, setBio] = useState(""); 
    // const [signUp, setSignUp] = useState("");

    const [user, setUser] = useState({
        name: "",
        email:"",
        phone:"",
        phoneType:"",
        staff:"",
        bio:"",
        signUp:""
    });


    const onSubmit = e => {
        e.preventDefault(); 

        const userInfo = {
            user
        }

        console.log(userInfo)

        setUser("");
    }

    const handleChange = (key) => {
        return (e) => {
            console.log(e)
            const newObj = Object.assign({}, user, {[key]: e.target.value})
            setUser(newObj)
        }
    }


    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id='name'
                        type="text" 
                        onChange={handleChange("name")}
                        value={user.name}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        id='email'
                        type="text" 
                        onChange={handleChange("email")}
                        value={user.email}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        id='phone'
                        type="text" 
                        onChange={handleChange("phone")}
                        value={user.phone}/>
                </div>
                <div>
                    <label htmlFor="phoneType">PhoneType:</label>
                    <select 
                        onChange={handleChange("phoneType")}
                        id='phoneType'
                        value={user.phoneType}>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="staff">Staff:</label>
                    <input 
                        onChange={handleChange("staff")}
                        name='staff'
                        type="radio" 
                        value="instructor"/> Instructor
                    <input 
                        onChange={handleChange("staff")}
                        name='staff'
                        type="radio" 
                        value="student"/> Student
                </div>
                <div> 
                    <label htmlFor="bio">Bio:</label>
                    <textarea name="bio" id="bio" cols="30" rows="10" onChange={handleChange("bio")}></textarea>
                </div>

                <div>
                    <label htmlFor="signUp">Email Notifications</label>
                    <input type="checkbox" id="signUp" name="signUp" value="yes" onChange={handleChange("signUp")}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
    

}

export default Form;