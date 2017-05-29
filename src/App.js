import React, {Component} from 'react';
import './App.css';
import uuid from 'uuid';

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
                    <ArtCardDashboard />
                </div>

            </div>

        );
    }
}

class ArtCardDashboard extends Component {
    state = {
        artcards: [
            {
                title: 'The Girl With A Pearl Earring',
                artist: 'Johannes Vermeer',
                id: uuid.v4(),
                imgURL: 'https://s3.amazonaws.com/artswipe/art-images/Girl_With_A_Pearl_Earring.jpg',
                datePainted: '1665'
            },
            {
                title: 'Portrait of Adele Bloch-Bauer I',
                artist: 'Gustav Klimt',
                id: uuid.v4(),
                imgURL: 'https://s3.amazonaws.com/artswipe/art-images/Gustav_Klimt-Adele-Bloch-Bauer1-865x577.jpg',
                datePainted: '1907'
            }
        ]
    }

    render() {
        return (
            <div>
                <ArtCardList
                    artcard={this.state.artcards}
                />
            </div>
        )
    }
}

class ArtCardList extends Component {

    render() {

        const artCards = this.props.artcards.map((artcard) => (
            <ArtCard
                key={artcard.id}
                id={artcard.id}
                title={artcard.title}
                artist={artcard.artist}
                datePainted={artcard.datePainted}
                imgURL={artcard.imgURL}
            />
        ))

        return (

            <div id="artcards">
                {artCards}

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
                            <img src={this.props.imgURL}></img>
                        </div>
                        <div className="content">
                            <a className="header">
                                {this.props.title}
                            </a>
                            <div className="meta">
                                <span className="date">
                                    {this.props.datePainted}
                                </span>
                            </div>
                            <div className="description">
                                {this.props.artist}
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
