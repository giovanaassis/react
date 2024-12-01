import "./button.css";

function ScrollToTopButton() {

    const HandleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <button onClick={HandleClick}>
            &#9650;
        </button>
    )

}

export default ScrollToTopButton;