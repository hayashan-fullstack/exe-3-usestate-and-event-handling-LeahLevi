import React from "react";
import ReactDOM from "react-dom";


const contactList = [
    {
        name: "sara",
        tel: "123456789",
        address: "israel",
        category: "family"
    },
    {
        name: "rivka",
        tel: "123456789",
        address: "israel",
        category: "work"
    },
    {
        name: "rachel",
        tel: "123456789",
        address: "israel",
        category: "class"
    },
    {
        name: "leah",
        tel: "123456789",
        address: "israel",
        category: "family"
    },
    {
        name: "rina",
        tel: "123456789",
        address: "israel",
        category: "work"
    },
    {
        name: "bina",
        tel: "123456789",
        address: "israel",
        category: "class"
    }
];
const Header=()=>{
    return(
        <div>
            <table border = '1'>
            <tr>
            <th width='15.7%'>name</th>
            <th width='15.7%'>tel</th>
            <th width='15.7%'>address</th>
            <th width='15.7%'>category</th>
            </tr>
            </table>
        </div>
    )
}
const Line=(props)=>{
    return(
        <div>
            <table border = '1'>
         <tr>
        <td width='19%'>{props.line.name}</td>
        <td width='19%'>{props.line.tel}</td>
        <td width='19%'>{props.line.address}</td>
        <td width='19%'>{props.line.category}</td>
        </tr>
        </table>
        </div>
    )
}

const Print=()=>{
    return(
          contactList.map(line =><Line line={line}/>)
    )
}

const App = () => {
    return (
        <div style={{margin:'10%'}}>
        <br/>
        <br/>
        <h1>My Contact</h1>
        <br/>
        <Header/>
        <Print/>
        
            {/* <p>{contactList[0].name} - {contactList[0].tel} - {contactList[0].address} - {contactList[0].category}</p>
            <p>{contactList[1].name} - {contactList[1].tel} - {contactList[1].address} - {contactList[1].category}</p>
            <p>{contactList[2].name} - {contactList[2].tel} - {contactList[2].address} - {contactList[2].category}</p>
            <p>{contactList[3].name} - {contactList[3].tel} - {contactList[3].address} - {contactList[3].category}</p>
            <p>{contactList[4].name} - {contactList[4].tel} - {contactList[4].address} - {contactList[4].category}</p>
            <p>{contactList[5].name} - {contactList[5].tel} - {contactList[5].address} - {contactList[5].category}</p> */}

        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));