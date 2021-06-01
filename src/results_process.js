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
        let pic_api = "https://covers.openlibrary.org/b/id/240727-S.jpg"
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
        
        
        fetch (pic_api)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
           console.log(data)
        })


    } 

    handleChange(event){
        this.setState({
            title:event.target.value
        })
    }

    render(){
        return(<div><div>
        <div >
            <form onSubmit={this.search_books}>
              <label>Book title search    </label> 
              <input type="text" value={this.state.title} onChange={this.handleChange}/>
            </form>
        </div>
            <p id="book">Title: {this.state.title}</p><br/>
            <p id="book">Author: {this.state.author}</p><br/>
            <p id="book">Sentence: {this.state.sentence}</p>
        </div>
        </div>
        )
    }
}

export default Process;