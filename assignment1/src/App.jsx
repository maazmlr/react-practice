import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Meme } from './components/Meme'
import { users } from './user'
import { post } from './post'

function App() {
  
  const name = "Hello World";
  const obj = {name: "Hello World Object"}
  const data = ['We', 'are', 'United'] //Show these in seperate tags
  const elements =data.map(ele => <li>{ele}</li>)
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
  const ele2=list.map(ele => <li>{ele.name}</li>)
  const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs' ,'Ionic']}]
  const ele3=complex.map(ele=> <div><h1>Company is : {ele.company}</h1> <h2>the jobs are </h2> <li>{ele.jobs[0]}</li> <li>{ele.jobs[1]}</li></div>)
  const p=post.map(ele => <p>{ele.body}</p>)

 const userName = users.map(ele=>   <div className="box" style={{display:'inline-block', width:'20rem',border:'2px solid',margin:'1rem'}}>
 <h1>{ele.name}</h1>
 <h4>{ele.email}</h4>
 <h5>{ele.company.name}</h5>
 <p>  "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
</p>
 </div>)
  return (
      <div>
        <h1>{name}</h1>
        <h1>Object : {obj.name}</h1>
        <h1>the data elements are </h1>
        {elements}
        <h1>the list elements are </h1>
        {ele2}
        {ele3}
      {userName}
      </div>
  ) 
}

export default App
