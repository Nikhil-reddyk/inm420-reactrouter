function Welcome(props) {
    console.log(props);
    return <h1>Hello, {props.name} {props.lastname}</h1>;
  }

  export default Welcome;