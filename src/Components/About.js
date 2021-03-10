import React, { Component, Fragment } from "react";
import Footer from "./Footer";
import { DiJavascript1 } from "react-icons/di";
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaJava,
  FaPython,
} from "react-icons/fa";

import * as Icons from "react-icons/fa";
import * as Icons2 from "react-icons/di";
import axios from 'axios'
import { Markup } from 'interweave';
import ReactHtmlParser from 'react-html-parser';
import DynamicFaIcon from './DynamicIcon'
export class About extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       subject:null,
       email:null,
       name:null,
       message:null,
       about_list:[],
       program_list:[]
    }
  }
    onChange=(event)=>{
      event.preventDefault()
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value
      })
    }
    onHandleSubmit =(event)=>{
      const {email,subject, name,message}=this.state
      event.preventDefault()
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const mail = { name,
        email,
        subject,
        message};
     
   
  
    axios.post('https://sahin-homepage.herokuapp.com/contacts/mails/',mail).then(
      (res)=>{
        alert('email has been send')
      }
    ).catch((err) => {
      alert(err)
    });
    
   
  } 
  updateList =async() =>{
    

    try{
      console.log("response database")
      axios.get('https://sahin-homepage.herokuapp.com/about/about-view/').then((res)=>{
        this.setState({
          ...this.state,
          about_list:res.data.results
        })
      }).catch(err=>{

      })
  
    }
    catch(err){
      console.log("err", err)
    }
  
    try{
      axios.get('https://sahin-homepage.herokuapp.com/about/programms-view/').then((response)=>{

        
        this.setState({
          ...this.state,
          program_list:response.data.results
        })
      }).catch(err=>{
        console.log("err", err)
      })
  
      console.log(this.state.program_list)
    }
    catch(err){
      console.log("err", err)
    }
  
  }
  
  
  componentDidMount(){
   
  this.updateList()
  }
  
  
  
  render() {
    return (
      <div>
        <div className="aboutPageMainDiv">
          <section className="aboutPageRightSection">
             {console.log("this.state.about_list", this.state.about_list),
             this.state.about_list.map((item, index)=>{
              console.log('herkes ayni isi mi yapsin?',this.state,item.about_image)
              return(
            <div key={index+1}>
            <article>
               <h3 className="aboutPageRightSectionH1"> About me!</h3>
               <div className="aboutPageRightSectionImgPlusText">
                 <img style={{objectFit:'cover'}} src={item.about_image} />
                 <p>
                   {item.about_exp1}
                 </p>
               </div>
             </article>
             <article>
               <h1> Welcome to my About </h1>
               <p>
                 {" "}
                 {item.about_exp2}
               </p>
             </article>
             </div>)})}
           <div><h3 className="aboutPageArticleH1"> Skills </h3></div>
           {console.log("program_list",this.state.program_list),
            this.state.program_list.map((element,index)=>{
             console.log(element,element.name,element.percentage, element.icon)
             return(<div id='skills' key={index+1}>
                   <div className="aboutPageArticleTotal">
                <div className="aboutPageArticleItem">
                  <div className="aboutPageArticleIconPlusText">
                    <div >
                      <span className="aboutPageArticleIcon">

                
                     <DynamicFaIcon name={element.icon}></DynamicFaIcon>
                  

                      </span>
                    </div>
                    <div className="aboutPageArticleText">{element.name}</div>
                  </div>
                  <div className="aboutPageArticleProcent">{element.percentage}</div>
                </div>
                <div style={{ "width": element.percentage}}  className="aboutPageArticleLine" ></div>
              </div>


             </div>)

           })}
            
          
       
          </section>
          <section className="aboutPageLeftSection">
            <form onSubmit={this.onHandleSubmit}  method="post">
            <div className="aboutPageLeftSectionFormDiv">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Please Enter your Name!"
                  value={this.state.name}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="aboutPageLeftSectionFormDiv">
                <label for="subjects">Mail Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Please Enter your Subject!"
                  value={this.state.subject}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="aboutPageLeftSectionFormDiv">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Please Enter your email adress"
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="aboutPageLeftSectionFormDiv">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here!"
                  onChange={this.onChange}
                  value={this.state.message}
                ></textarea>
              </div>
              <button className="aboutPageLeftSectionFormDiv" type="submit">
                {" "}
                Send
              </button>
            </form>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
