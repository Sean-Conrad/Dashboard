import React, { useEffect, useState } from "react";
import axios from "axios";
import Ticks from "../components/Ticks";

export default function Tickets() {

    const [ticket, setTicket] = useState({
        title: '',
        body: '',
        posts: []
    });

    useEffect(()=> {
        getTestTicket();
        }, [])

    function createCard(ticket){
        return(
        <Ticks
            key={ticket.id}
            title={ticket.title}
            body={ticket.body}
        />
      )
    }

    function getTestTicket(){
          axios.get('/api')
           .then((response)=> {
                const data = response.data;
                setTicket(()=> {
                    return{
                        posts: data
                    }
                })
                console.log("Data has been recieved");
           })
           .catch(()=> {
                alert('Error retrieving data.'); 
           })
    }

    function handleChange(event){
        const {name, value} = event.target;
        
        setTicket((prevValue) => {
            return{
                ...prevValue,
                [name] : value
                
            };
            
        });
        
    }

    function submit(event){
        event.preventDefault();

        const payload ={
            title: ticket.title,
            body: ticket.body
        }

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        });
        
        try{
            console.log("Submit was successful")
        } catch(error) {
            console.log({error})
        }

        setTicket({
            title: '',
            body: ''
        });
        getTestTicket();
    }

    function displayTickets(posts){
        // !posts may not work to detect empty
         if(!posts){
            return null;
         }
         return(
            posts.map(createCard)
         );
         
    }

    return (
        
      <div className="wrapper">
        <div className="col-sm-6 body-text"><h1>Create A Ticket</h1></div>
            <form className="card" onSubmit={submit}>
                <div className="container-fluid row">
                    <div className="form-input">
                        <input type="text" 
                                name="title" 
                                value={ticket.title}
                                placeholder="Title" 
                                onChange={handleChange} />
                    </div>
                    <div className="form-input">
                        <textarea name='body' 
                                  cols='30' 
                                  rows='10' 
                                  value={ticket.body}
                                  placeholder="Body" 
                                  onChange={handleChange}>

                        </textarea>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
            <h1 className="body-text">Active Tickets</h1>
            <form>
                <div className="tickets">
                    {displayTickets(ticket.posts)}
                </div>
            </form>
        </div>
    );
  }