import React from 'react';

class MemeGenerator extends React.Component {
    state = {
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
        allMemeImages: []
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         topText: '',
    //         bottomText: '',
    //         randomImage: 'http://i.imgflip.com/1bij.jpg',
    //         allMemeImages: []
    //     }

    //     // binding the methods
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    componentDidMount = () => {     // array functions in-default are binded to the class
        fetch('https://api.imgflip.com/get_memes')
            .then((response)=>{
                return response.json();
            })
            .then((response)=>{
                const {memes} = response.data;
                this.setState({ allMemeImages: memes });
            });
    }

    handleChange = (event) => {
        console.log('working');
        const {name, value} = event.target;
        this.setState({ 
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const len = this.state.allMemeImages.length;
        const randNum = Math.floor(Math.random() * len);
        this.setState({ randomImage : this.state.allMemeImages[randNum].url });
    }

    render() {
        return (
            <div className='meme_generator'>
                <form  className='meme_form' onSubmit={this.handleSubmit}>
                    <label>
                        Top text: &nbsp;
                        <input 
                            type='text' 
                            name='topText' 
                            value={this.state.topText} 
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Bottom text: &nbsp;
                        <input 
                            type='text' 
                            name='bottomText' 
                            value={this.state.bottomText} 
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <button>Gen</button>
                </form>
                

                <div className='meme'>
                    <h2 id='top_text'>{this.state.topText}</h2>
                    <img 
                        src={this.state.randomImage} 
                        alt='meme' 
                        width='600px'
                    />                    
                    <h2 id='bottom_text'>{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;