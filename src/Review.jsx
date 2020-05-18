import React from 'react'

 const Review = (props) => {
    const { title, content, id, appId } = props;
    return (
        <>
            <div className="card mt-3 w-100">
                <div className="card-body">
    <h5 className="card-title">{title.label}</h5>
    <p className="card-text">{content.label}</p>
                </div>
            </div>
        </>
    )
}
export default Review;