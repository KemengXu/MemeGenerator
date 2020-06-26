import React from "react";
import Header from "./components/Header"
class App extends React.Component{
  // constructor is not necessary, can directly have state here
  constructor() {
    super();
    this.state = {
      topText:"",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(res=> {
      const {memes} = res.data;
      this.setState({allMemeImgs: memes})
    })
  }
  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event){   // or use =>, no need to bind in constructor
    event.preventDefault();
    const randNum = Math.floor(Math.random()*this.state.allMemeImgs.length)
    const randImg = this.state.allMemeImgs[randNum].url;
    this.setState({randomImg: randImg})
  }
  render() {
    return(
        <div>
          <Header/>
          <form className="meme-form" onSubmit={this.handleSubmit}>
            <input type="text" name="topText" value={this.state.topText} placeholder="top text" onChange={this.handleChange}/>
            <input type="text" name="bottomText" value={this.state.bottomText} placeholder="bottom text" onChange={this.handleChange}/>
            <button>Generate</button>
          </form>
          <div className="meme">
            <img src={this.state.randomImg} alt="Loading..."/>
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </div>
    )
  }
}
export default App;