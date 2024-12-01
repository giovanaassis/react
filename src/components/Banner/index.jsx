import styles from "./Banner.module.css";

// eslint-disable-next-line react/prop-types
function Banner({ image }) {
    return (
        <div 
        className={styles.banner} 
        style={{backgroundImage:`url("/images/banner-${image}.png")`}}
        >
        </div>
    )
}

export default Banner;