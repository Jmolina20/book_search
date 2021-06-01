import React,{Component} from 'react';


class Process extends Component{
    constructor (){
        super()
        this.state={
            title:"",
            author:"",
            //synopsis:,
            isbn:[],
            sentence:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.search_books=this.search_books.bind(this)
    }
    
     search_books(event){
        event.preventDefault();
        let temp = this.state.title;
        let api="https://openlibrary.org/search.json?title=" + temp;
        fetch(api)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            this.setState({
                title:data.docs[0].title,
                author:data.docs[0].author_alternative_name[0],
                sentence:data.docs[0].first_sentence[0]
                })
            // console.log(data.docs[0].title);
            // console.log(data.docs[0].author_alternative_name[1]);
            // console.log(data.docs[0].first_sentence[0])
        })

    } 

    handleChange(event){
        this.setState({
            title:event.target.value
        })
    }

    render(){
        return(<div><div>
        <div>
            <form onSubmit={this.search_books}>
              <label>Book title search</label> 
              <input type="text" value={this.state.title} onChange={this.handleChange}/>
            </form>
        </div>
            <p>Title: {this.state.title}</p>
            <p>Author: {this.state.author}</p>
            <p>Sentence: {this.state.sentence}</p>
        </div>
        </div>
        )
    }
}

export default Process;