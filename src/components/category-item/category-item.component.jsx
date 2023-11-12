import './category-item.styles.scss'

const CategoryItem = ({ product: {title, imgURL}  })  => {
    return (
        <div className="category-container">
          <div className="background-image" style={{backgroundImage: `url(${imgURL})`}} />
          <div className="category-body-container">
            <h3>{title}</h3>
            <p>ShopNow</p>
          </div>
        </div>
      );
    
}

export default CategoryItem;