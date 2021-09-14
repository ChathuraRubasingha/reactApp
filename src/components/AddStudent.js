import react, {useState} from "react";

export default function Addstudent () {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");


    function sendData (e) {
        e.preventDefault();
        const studentData = {
            name,
            age,
            gender
        }

        console.log(studentData);
    }

    return (
        <div className="container" style={{width:'30%', padding: '50px'}}>
            <form onSubmit = {sendData}>
                <div class="mb-3">
                    <label for="studentName" class="form-label">Student Name</label>
                    <input type="text" class="form-control" id="studentName" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}></input>
                </div>
                <div class="mb-3">
                    <label for="Age" class="form-label">Age</label>
                    <input type="text" class="form-control" id="Age" 
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}></input>
                </div>
                <div class="mb-3">
                    <label for="Gender" class="form-label">Gender</label>
                    <input type="text" class="form-control" id="Gender"
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}></input>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}