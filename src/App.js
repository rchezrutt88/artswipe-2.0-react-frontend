import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {

        return (
            <Layout />
        );
    }
}

class Layout extends Component {

    render() {
        return (

            <div>
                <div className="ui menu">
                    <div className="header item">Brand</div>
                    <a className="active item">Link</a>
                    <a className="item">Link</a>
                    <div className="ui dropdown item">
                        Dropdown
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">Action</div>
                            <div className="item">Another Action</div>
                            <div className="item">Something else here</div>
                            <div className="divider"></div>
                            <div className="item">Separated Link</div>
                            <div className="divider"></div>
                            <div className="item">One more separated link</div>
                        </div>
                    </div>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui action left icon input">
                                <i className="search icon"></i>
                                <input type="text" placeholder="Search"></input>
                                <button className="ui button">Submit</button>
                            </div>
                        </div>
                        <a className="item">Link</a>
                    </div>
                </div>

                <div>
                    <ArtCard />
                </div>

            </div>

        );
    }
}

class ArtCard extends Component {

    render() {

        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <div className="ui card">
                        <div className="ui centered small image">
                            <img src="https://s3.amazonaws.com/artswipe/art-images/Sylvia-von-Harden-Otto-Dix-831x1024.jpg"></img>
                        </div>
                        <div className="content">
                            <a className="header">Kristy</a>
                            <div className="meta">
                                <span className="date">Joined in 2013</span>
                            </div>
                            <div className="description">
                                Kristy is an art director living in New York.
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="user icon"></i>
                                22 Friends
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
