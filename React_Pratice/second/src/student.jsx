function Student(data){
    return(
        <>
        <div>
            <h1>Student Name: {data.name}</h1>
            <h2>Student Age: {data.age}</h2>
            <h3>Student Roll No: {data.rollno}</h3>
        </div>
        <div>
            <h1>Hobbies:</h1>
            <ul>
                {data.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>

        </div>
        </>
    )
}

export default Student;



