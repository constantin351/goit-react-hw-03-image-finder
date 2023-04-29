import PropTypes from "prop-types";

function ImageGalleryItem({id, webURL, largeURL}) { 
    return (
        <li className="ImageGalleryItem" key={id}>
            <img src={webURL} alt="" />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;