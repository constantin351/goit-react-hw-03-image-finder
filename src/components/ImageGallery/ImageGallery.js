import ImageGalleryItem from "components/ImageGalleryItem";
import PropTypes from "prop-types";


function ImageGallery({ images }) { 
    return (
        <ul className="ImageGallery">
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    webURL={image.webformatURL}
                    largeURL={image.largeImageURL}
                    // number={contact.number}
                    // onDeleteBtnClick={onDeleteBtnClick} // 1й вариант (см ContactListItem)
                    // onDeleteBtnClick={() => onDeleteBtnClick(contact.id)}  // 2й вариант (см ContactListItem)
                    // contactId={contact.id}
                />
            ))               
            }
        </ul>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    })),
    // onDeleteBtnClick: PropTypes.func,
};


export default ImageGallery;