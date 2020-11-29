import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export class MovieItem extends React.Component {

    //bind too instance of method
    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //logs too the console delete text and id for debugging
    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete: "+this.props.movie._id)
        
        //calls delete,calls url,pass up id and server deletes Id from database.
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            //calls back too movies.js which cals back too reead.js and update the list
            this.props.ReloadData();
        })
        .catch();
    }

    //renders the Poster and the year,the button trap the onclick event and goes too server and invoke  method in server.js
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}