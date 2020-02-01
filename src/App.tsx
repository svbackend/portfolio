import React, { Component } from 'react';
import './App.css';

const companyName:string = "CMC";
const companyUrl:string = 'https://www.clearmortgagecapital.com/';
const universityName:string = 'PJATK';
const universityUrl:string = 'http://www.pja.edu.pl/en/';
const universityYears:string = '2018-2022';
const yearsOfExperience:number = (new Date().getFullYear() - 2015);
const currentLocation:string = 'Warsaw, Poland';
const currentEmail:string = 'svbackend22@gmail.com';
const currentResumeUrl:string = 'https://docs.google.com/document/d/1JnTviLtkWa5Xh-viTocx2DBGnP4Nk31IUkh5z9Yi4GM/edit?usp=sharing';
const currentLinkedinUrl:string = 'https://www.linkedin.com/in/svbackend/';
const currentGithubUrl:string = 'https://github.com/svbackend';
const currentUpworkUrl:string = 'https://www.upwork.com/o/profiles/users/_~018a4a0ded0fec0fe6/';
const lookingForJob:boolean = false;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Valentyn Saik<br />
          <span className="subheading">
            Software Engineer at <a href={companyUrl}>{companyName}</a>
          </span>
        </h1>
        <p>
          I'm a Software Engineer with {yearsOfExperience}+ years of professional experience in php + mysql/postgres,
          mostly working with frameworks such as Symfony / Laravel,
          student of <a href={universityUrl} target="_blank">{universityName}</a> ({universityYears}), currently based in {currentLocation}.
        </p>
        <p>
          My CV can be found at <a href={currentResumeUrl}>google drive</a>
          {
            lookingForJob === false
            ? " but I'm not looking for a new job at the moment." 
            : " and I'm open to new opportunities, especially interested in projects in medical or educational sectors."
          }
        </p>
        <h3>Contacts</h3>
        <ul>
          <li><a href={'mailto:' + currentEmail}>{currentEmail}</a></li>
          <li><a href={currentGithubUrl} target="_blank">Github</a></li>
          <li><a href={currentLinkedinUrl} target="_blank">LinkedIn</a></li>
          <li><a href={currentUpworkUrl} target="_blank">Upwork</a></li>
        </ul>
      </div>
    );
  }
}

export default App;