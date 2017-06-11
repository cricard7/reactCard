var person = {
  name: 'Lambda the Llama',
  location: 'Lima, Peru',
  occupation: {
    title: 'Looking everywhere for a good meal!',
    employer: 'the people'
  },
  photo: 'images/lama.jpg',
  updates: [
    {
      platform: 'twitter',
      status: 'Found some sweet alfalfa'
    },
    {
      platform: 'twitter',
      status: 'Layin in the hay and chillin like a villain'
    },
    {
      platform: 'facebook',
      status: 'I just spat on someone LOL!'
    }
  ]
}
    

    
    
    class Photo extends React.Component {
        render(){
            
            return(
            
                <div className="photo">
                    <img src={this.props.source} alt="Photo"/>
                </div>
            
            )
            
            
        }
        
        
    }

    class Bio extends React.Component {
        render(){
            
            return(
            
                <div className="bio">
                    <h1 className="name">{this.props.name}</h1>
                    <h2 className="location">{this.props.location}</h2>
                    <div className="occupation">
                        <p>{this.props.occupation.title}. I work for {this.props.occupation.employer}</p>
                    </div>
                </div>
            
            
            )
            
            
        }
        
        
    }

    class Updates extends React.Component {
        
        //updates function to loop through the updates array passed to this component.
        //react website states that an index is required when using map to that react can track dynamic data that is added and removed.
        //https://facebook.github.io/react/docs/lists-and-keys.html
        updates(){
            
            return this.props.updates.map(function(update, index){
                
                return(
                    <li className={"update " + update.platform} key={index}>
                        {update.status}
                    </li>
                 )  
            });
            
            
            
        }
        
        
        
        render(){
            
            return(
                <div className="updates">
                    <ul>
                        {this.updates()}
                    </ul>
                </div>
            )      
        }   
    }
    
    // Note that Component has capital C
    // the entire updates array is passed to Updates component. It is the components job to loop through the individual updates
    class Card extends React.Component {
        
        render(){
            
            return(
            
                 <div className="card">
                    <Photo source={person.photo} />
                    <Bio name={person.name} location={person.location} occupation={person.occupation} />
                    <Updates updates={person.updates}/>
                </div> 
            
            )      
        }
    }

ReactDOM.render(   
    <Card />,
    document.getElementById("app")
);