function Student(props){
    console.log(props);
    return(
      <div>
        <h1>My name is {props.name}</h1>
        <h2>Other Info</h2>
        <div>
            <h3>Age : {props.other.age}</h3>
            <h3>Gender : {props.other.gender}</h3>
            <h3>Address : {props.other.address}</h3>
            <h3>Mail : {props.other.email}</h3>
        </div>
      </div>  
    );
}

export default Student;