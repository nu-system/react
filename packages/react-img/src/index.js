import React from 'react'
import PropTypes from 'prop-types';
import "./style.css";

// class name
const STYLES = {
    img: 'nu_img',
    box: "nu_img_box",
    circle: "_circle",
    stage: "nu_img_stage",
    placeholder: "nu_img_placeholder"
};

const classNames = function (classList) {
    return classList.filter(item => !!item).join(' ');
};

const getErrorBg = function (errorBg) {
    const DEFAULT_BG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjQAMAABAAAbSqgB8AAAAASUVORK5CYII=';
    if (errorBg === true) {
        return DEFAULT_BG;
    }
    if (errorBg.indexOf('data:image/') === 0) {
        return errorBg;
    }
    return `data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='100%25' height='100%25' style='fill:${encodeURIComponent(errorBg)};'/%3E%3C/svg%3E`;
};

const Img = function ({className = '', errorBg = false, circle = false, ...otherProps}) {
    if (errorBg && !otherProps.onError) {
        otherProps.onError = (event) => {
            const newErrorBg = getErrorBg(errorBg);
            if (event.target.src !== newErrorBg) {
                event.target.src = newErrorBg;
            }
        };
    }
    return (<img className={classNames([className, STYLES.img, circle ? STYLES.circle : ''])} {...otherProps} />);
};

const NuImg = function ({responsive = false, children = null, ...otherProps}) {
    if (!responsive && !children) {
        return <Img {...otherProps} />;
    }
    const {style, circle, className = '', ...leftProps} = otherProps;
    return (
        <nu-img data-responsive={responsive} class={classNames([className, STYLES.box, circle ? STYLES.circle : ''])} {...{style}}>
            <Img {...leftProps} />
            <span className={STYLES.placeholder} aria-hidden="true" style={{paddingTop: (leftProps.height / leftProps.width * 100) + '%'}}/>
            {children ? <span className={STYLES.stage}>{children}</span> : null}
        </nu-img>
    );
};

NuImg.propTypes = {
    defaultSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    responsive: PropTypes.oneOf([false, true, 'x', 'y']),
    circle: PropTypes.bool
};

export default NuImg;
