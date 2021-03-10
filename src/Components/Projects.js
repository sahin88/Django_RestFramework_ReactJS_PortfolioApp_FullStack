import React, { Component } from "react";
import Footer from "./Footer";
import Card from"./Card";
import axios from "axios"
export class Projects extends Component {
constructor(props) {
  super(props)

  this.state = {
     project_list:[]
  }
}

 updateList =async() =>{

  try{
    axios.get('https://sahin-homepage.herokuapp.com/projects/').then((res)=>{

      this.setState({
        project_list:res.data.results
      })
    }).catch(err=>{
      console.log("err", err)
    })

    console.log(this.state.project_list)
  }
  catch(err){
    console.log("err", err)
  }


}


componentDidMount(){
 
this.updateList()
return true
}


  render() {
   
    return (
      <div>

        <div className="projectPageMainDiv">
          <p></p>
       { this.state.project_list.map((item, index)=>{
         console.log("source", item.url_field)
         return  (
          <a href={item.url_field}>
         <Card key={index+1} name={item.name} src={item.image} description={item.description}/>
         </a>)
       })} 
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
