function Button({ displayType, buttonType, upvoteCount=null, handleClick=null }) {
    const cardButtonClasses = "btn btn-light mt-auto d-flex align-items-center";
    const postButtonClasses = "card-link btn btn-outline-dark align-items-center";
    const upvoteClasses = "fas fa-arrow-up mr-2";
    const shareClasses = "fas fa-share-alt mr-2";
    let buttonClasses, buttonText, icon, upvotes;

    if (displayType === "card") {
        buttonClasses = cardButtonClasses;
    }
    else if (displayType === "post") {
        buttonClasses = postButtonClasses;
    }

    if (buttonType === "upvote") {
        icon = <i className={upvoteClasses}></i>;
        buttonText = <span>Upvote</span>;
        upvotes = <span className="ml-2">({upvoteCount})</span>
    }
    else if (buttonType === "share") {
        icon = <i className={shareClasses}></i>;
        buttonText = <span>Share</span>;
    }

    return (
        <button
            className={buttonClasses}
            onClick={handleClick}
        >
            {icon}&nbsp;{buttonText}&nbsp;{upvotes}
        </button>
    )
}

export default Button
