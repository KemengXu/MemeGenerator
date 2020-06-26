// import React from 'react';
// import Joke from './components/joke'
// import Button from "./components/button";
//
// class App extends  React.Component{
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false,
//       username: "",
//       isFriendly: true,
//       gender: "",
//       favColor: ""
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleChange = this.handleChange.bind(this)
//   }
//   // componentDidMount(){
//   //
//   // }
//   handleClick(){
//     this.setState(prevState=>{
//       return {
//         isLoggedIn: !prevState.isLoggedIn,
//         username: prevState.username
//       }
//     });
//     alert("clicked")
//   }
//   handleChange(event) {
//     const {type, name, value, checked} = event.target;
//     type === "checkbox" ?
//       this.setState({[name]: checked}) : this.setState({[name]: value   // brackets make name from an object to a str
//         })
//   }
//   render() {
//     let btnText = this.state.isLoggedIn? "Log out": "Log in";
//     return (
//         <div>
//           <form>
//             <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleChange}/>
//             <h3>{this.state.username}</h3>
//             <textarea value="some default value"/>
//             <br/>
//             <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onClick={this.handleChange}/>friendly??
//             <br/>
//             <label>
//               <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} /> male
//             </label>
//             <label>
//               <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>female
//             </label>
//             <br/>
//             <label>Favorite Color:</label>
//             <select name="favColor" value={this.state.favColor} onChange={this.handleChange}>
//               <option value="blue">blue</option>
//               <option value="green">green</option>
//               <option value="red">red</option>
//             </select>
//             <br/>
//             {/*button inside a form works as submit*/}
//             <Button prop={this.handleClick} text={btnText}/>
//           </form>
//         </div>
//     );
//   }
// }
//
// export default App;
