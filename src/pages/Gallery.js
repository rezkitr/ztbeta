import React, { Component } from 'react';
import MyGallery from 'react-grid-gallery';

const IMAGES =
  [{
    src: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
    thumbnailWidth: 320,
    thumbnailHeight: 160,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
    thumbnail: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
    thumbnailWidth: 320,
    thumbnailHeight: 160,
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
    thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
    thumbnailWidth: 320,
    thumbnailHeight: 160
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 160
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 160
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 160
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 160
  }
  ];


export default class Gallery extends Component {
  render() {
    return (

      <div className="container" id="gallery-page">
        <div className="row">
          <div className="col-md">
            <MyGallery images={IMAGES} />

          </div>
        </div>
      </div>

    )
  }
}
