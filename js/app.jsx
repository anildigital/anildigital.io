/** @jsx React.DOM */

var req = new XMLHttpRequest();

var App = React.createClass({  

    getInitialState: function() { 
        return {recenttracks: {"track": [{"name" : "Loading...", "artist": {"#text": ""}}]}};
    },

    updateState: function(){
        var resp = JSON.parse(req.response);
        this.setState(resp);
    },
    
    fetchFeed: function(){
        var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=anildigital&api_key=d5eb0b1875c450d79bb1e5bb36aac9a6&limit=15&format=json";
        req.onload = this.updateState;
        req.open("GET", url);
        req.send();       
    },
    
    render: function() {
        var rows = [];
        for(var i=0; i < this.state.recenttracks.track.length; i++) {
            var music = this.state.recenttracks.track[i];
            rows.push(<li>{music.name} - {music.artist["#text"]}</li>);
        };
        return <ul className="music_list">
            {rows}
            <li></li>
        </ul>;
    }, 
    
    componentDidMount: function(){
        this.fetchFeed();
        setInterval(this.fetchFeed, 5000);
    }
});


React.render(<App />, document.body);
