import React, { useState, useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({
    image,
    title,
    description,
    price,
    salePrice,
    onAddToCart,
    onToggleFavorite
}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        let timeout;
        if (isAdded) {
            timeout = setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [isAdded]);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (!isAdded) {
            setIsAdded(true);
            if (onAddToCart) onAddToCart();
        }
    };

    const toggleFavorite = (e) => {
        e.stopPropagation();
        setIsFavorite((prev) => !prev);
        if (onToggleFavorite) onToggleFavorite(!isFavorite);
    };

    const hasDiscount = salePrice && price > salePrice;
    const discountPct = hasDiscount ? Math.round(((price - salePrice) / price) * 100) : 0;

    return (
        <article className="product-card-container">
            {/* Image Block */}
            <div className="card-image-wrapper">
                <img
                    src={image}
                    alt={title}
                    className="card-image"
                    loading="lazy"
                />

                {/* Discount Badge */}
                {hasDiscount && (
                    <span className="discount-badge">
                        -{discountPct}%
                    </span>
                )}

                {/* Favorite Button */}
                <button
                    className={`favorite-button ${isFavorite ? 'active' : ''}`}
                    onClick={toggleFavorite}
                    aria-label="Toggle favorite"
                    type="button"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>

            {/* Details Block */}
            <div className="card-details">
                <h3 className="card-title" title={title}>{title}</h3>
                <p className="card-description">{description}</p>

                <div className="card-footer">
                    <div className="price-wrapper">
                        <span className="price-sale">₹{salePrice.toLocaleString('en-IN')}</span>
                        {hasDiscount && (
                            <span className="price-original">₹{price.toLocaleString('en-IN')}</span>
                        )}
                    </div>

                    <button
                        className="add-button"
                        onClick={handleAddToCart}
                        disabled={isAdded}
                    >
                        {isAdded ? 'Added' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
