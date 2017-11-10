import React, {Component} from 'react';
import logo from './logo.svg';
import default_avatar from './default_avatar.jpg'
import './App.css';
import data from './artworks'


class Swiper extends Component {

    constructor(props) {
        super(props);
        this.state = {

            artworks: [
                {
                    key: 1,
                    title: "Portrait of Madame X",
                    artist: "John Singer Sargent",
                    date_painted: "1884",
                    location: "Metropolitan Museum of Art",
                    art_image: "images/thumb_portrait_of_madam_x.jpg"
                },
                {
                    key: 2,
                    title: "Jeanne Hebuterne (1919)",
                    artist: "Amedeo Modigliani",
                    date_painted: "1919",
                    location: "Private Collection",
                    art_image: "images/thumb_jeanne-hebuterne-1919.jpg"
                },
                {
                    key: 3,
                    title: "The Garden of Earthy Delights",
                    artist: "Hieronymous Bosch",
                    date_painted: "1503-1515",
                    location: "Museo Del Prado",
                    art_image: "images/thumb_the_garden_of_earthly_delights.jpg"
                },
            ]
        }
    }

    render() {

        return (
            <div className='swipe-container card-columns'>
                <CardDeck
                    artcards={this.state.artworks}
                />
            </div>
        );
    }
}

class CardDeck extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const artcards = this.props.artcards.map((artcard) => (
            <ArtCard
                key={artcard.key}
                title={artcard.title}
                artist={artcard.artist}
                art_image={artcard.art_image}

            />
        ));
        return (
            <div>
                {artcards}
            </div>
        )
    }
}


class ArtCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: 0
        }
    }

    handleVote = () => {
        this.setState({liked: 1});
        console.log(this.state);
    }


    render() {
        return (
            <div className={'card', this.state.liked && 'red'} style={{width: '20rem'}}>
                <img className={'card-img-top'} src={this.props.art_image} alt={'missing'}/>
                <div className={'card-body'}>
                    <h4 className={'card-title'}>
                        {this.props.title}
                    </h4>
                    <h5 className={'card-subtitle'}>
                        {this.props.artist}
                    </h5>
                </div>
                <div className={'card-footer'}>

                    <button
                        onClick={this.handleVote}
                    >

                    </button>
                </div>
            </div>
        )
    }
}

class SwiperSlide extends Component {
    render() {
        return (
            <div className='swiper-slide'>

            </div>
        );
    }
}

export default Swiper;
