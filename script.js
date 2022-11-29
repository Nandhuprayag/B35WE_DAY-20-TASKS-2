

// const API="https://emojihub.herokuapp.com/api/random/group_face_positive"

const API="https://www.gov.uk/bank-holidays.json"

function getValue()
{
    alert('hi')
     let getInput=document.getElementById('fisher_input').value;

    
}


  let   originalData=[]

let getFullContent=() =>
{
  fetch(`${API}`)
  .then(data => data.json())
  .then(data => 
     {
       originalData=[data]
       getSeperatedData=originalData[0].scotland.events;
       console.log(getSeperatedData)
      console.log(originalData)
       // if i seperate the items then can able to see 
        //  console.log(originalData[0].scotland.events)

       document.querySelector('.grid-container').innerHTML=populateData(getSeperatedData)
     })
     
}
getFullContent()

function Home(){
    alert('Welcome to UK Bank Holidays API')
}
const populateData=(getSeperatedData) =>
{
    let viewContent='';
     
    for(let i=0;i<getSeperatedData.length;i++)
    {
       viewContent +=`
       
       <ul class="list-group p-2 border border-success border-3 rounded">
       <li class="list-group-item"><span><strong>Title: </strong>${getSeperatedData[i].title}</span></li>
       <li class="list-group-item"><span><strong>Date: </strong>${getSeperatedData[i].date}</span></li>
       <li class="list-group-item"><span><strong>Bunting: </strong>${getSeperatedData[i].bunting}</span></li>
      
       </ul>
      `
    }
       return viewContent
}