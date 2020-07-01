import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'



class GifListContainer extends Component {
    
    state = {
        gifs: []
    }
    
    fetchGIFs = (query = "dolphins") => {
        const API = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=iRpZFqkX9yeuCvThdVMmIbCt2GvnSyG2`
        fetch(API)
          .then(res => res.json())
          .then(({data}) => {
              console.log(data)
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
      }

    componentDidMount(){
        this.fetchGIFs()
    }

    render() {
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer;