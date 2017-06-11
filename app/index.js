var person = {
  name: 'Chris Castig',
  location: 'Brooklyn, New York',
  occupation: {
    title: 'Protecting Freedom',
    employer: '@onemonthedu'
  },
  photo: './images/chris-merica.png',
  updates: [
    {
      platform: 'twitter',
      status: 'I\'m happy, hope you\'re happy too!'
    },
    {
      platform: 'twitter',
      status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
    },
    {
      platform: 'twitter',
      status: 'Fear makes the wolf look bigger'
    },
    {
      platform: 'facebook',
      status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
    }
  ]
}
    

    
    
    class Photo extends React.Component {
        render(){
            
            return(
            
                <div className="photo">
                    <img src="images/lama.jpg" alt="Photo"/>
                </div>
            
            
            )
            
            
        }
        
        
    }

    class Bio extends React.Component {
        render(){
            
            return(
            
                <div className="bio">
                    <h1 className="name">LaMa the lama</h1>
                    <h2 className="location">Lima, Peru</h2>
                    <div className="occupation">
                        <p>Looking everywhere for a good meal</p>
                    </div>
                </div>
            
            
            )
            
            
        }
        
        
    }

    class Updates extends React.Component {
        render(){
            
            return(
                <div className="updates">
                    <ul>
                        <li className="update">Updates</li>
                        <li className="update">Updates</li>
                    </ul>
                </div>
            )      
        }   
    }
    
    // Note that Component has capital C
    class Card extends React.Component {
        
        render(){
            
            return(
            
                 <div className="card">
                    <Photo />
                    <Bio />
                    <Updates />
                </div> 
            
            )
            
        }
    }


ReactDOM.render(   
    <Card />,
    document.getElementById("app")
);