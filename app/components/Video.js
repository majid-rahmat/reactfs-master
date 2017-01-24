import React from 'react';

function Video(props) {
  	return(
		<div>
    		<iframe className={props.customClass} src={props.src} width={props.width} height={props.height} frameBorder="0" allowFullScreen></iframe>
    	</div> 
		);
};

Video.propTypes={
  customClass: React.PropTypes.string,
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

export default Video;



// const React = require('react')
// const axios = require('axios')

// class Video extends React.Component {
//   constructor (props) {
//     super(props)
//   }

//   componentDidMount () {
//     axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
//       .then((response) => {
//         this.setState({omdbData: response.data})
//       })
//       .catch((error) => {
//         console.error('axios error', error)
//       })
//   }
//   assignShow (id) {
//     const showArray = this.props.shows.filter((show) => show.imdbID === id)
//     return showArray[0]
//   }
//   render () {
//     const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
//     let rating
//     if (this.state.omdbData.imdbRating) {
//       rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
//     }
//     return (
//       <div className='container'>
//         <Header />
//         <div className='video-info'>
//           <h1 className='video-title'>{title}</h1>
//           <h2 className='video-year'>({year})</h2>
//           {rating}
//           <img className='video-poster' src={`/public/img/posters/${poster}`} />
//           <p className='video-description'>{description}</p>
//         </div>
//         <div className='video-container'>
//           <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
//         </div>
//       </div>
//     )
//   }
// }
