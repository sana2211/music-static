import React, { Component } from 'react';

class Getmusic extends Component {
    state = { data: [
        {
            url: 'http://youtube.be/GUHDFIHIFD',
            artist: 'Coldplay',
            title: 'Lost'
        },

        {
            url: 'http://youtube.be/CFSUHID',
            artist: 'Queen',
            title: 'Another one bite to dust'
        },
        {
            url: 'http://youtube.be/7EH9H9N',
            artist: 'Michael Jackson',
            title: 'Thriller'
        },
    ] }
 
    render() { 
        return ( 
            <div>
                <p>Bookmarked music</p>
                <ul className="getmusicul">
                    
                {
                this.state.data.map((item)=>{
                    return (<div key = {item.url}>
                            <li>URL: {item.url}</li>
                            <li>ARTIST: {item.artist}</li>
                            <li>TITLE: {item.title}</li>
                            <button>Delete</button>
                            <br></br>
                            </div>
                    )
                })
                 }
                 </ul>
            </div>
         );
    }
}
 
export default Getmusic;