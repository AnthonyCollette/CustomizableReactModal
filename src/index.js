import React from "react";
import styles from './styles.module.css';

/**
 * Customizable modal component for React.
 * @param {object} props - The component props.
 * @param {string} props.color - The main color of the modal.
 * @param {string} props.title - The title of the modal.
 * @param {string} props.text - The text of the modal.
 * @param {boolean} props.btnFilled - Indicates if the button is filled.
 * @param {boolean} props.btnOutline - Indicates if the button has an outline.
 * @param {string} props.btnText - The text of the button.
 * @param {function} props.handleCrossBtn - The function to handle the close button.
 * @param {number} props.btnBorderRadius - The border radius of the button.
 * @param {string} props.btnPadding - The padding of the button.
 * @param {string} props.btnAlign - The horizontal alignment of the button ('left', 'center', 'right').
 * @param {string} props.textAlign - The horizontal alignment of the text.
 * @param {string} props.titleAlign - The horizontal alignment of the title.
 * @param {string} props.crossColor - The color of the close button.
 * @param {boolean} props.btnCross - Indicates if the close button is displayed.
 * @param {number} props.border - The border thickness of the modal.
 * @param {function} props.handleModalBtn - The function to handle the modal button.
 * @returns {JSX.Element} The customizable modal component.
 */

const CustomizableReactModal = ({ color, title, text, btnFilled, btnOutline, btnText, handleCrossBtn, btnBorderRadius, btnPadding, btnAlign, textAlign, titleAlign, crossColor, btnCross, border, handleModalBtn }) => {

    /**
     * Determines the position of the button based on the specified alignment.
     * @returns {string} The CSS position of the button.
     */
    const btnPosition = () => {
        switch (btnAlign) {
            case 'left':
                return '0 auto 0 0'
            case 'center':
                return '0 auto'
            case 'right':
                return '0 0 0 auto'
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.overlay} style={{ 'border': `${border}px solid ${color}` }}>
                {title && <h2 style={{ 'color': color, 'textAlign': titleAlign }}>{title}</h2>}
                {text && <p style={{ 'color': color, 'textAlign': textAlign }}>{text}</p>}
                {btnFilled && <button onClick={handleModalBtn} style={{ 'backgroundColor': color, 'color': 'white', 'border': `1px solid ${color}`, 'borderRadius': btnBorderRadius, 'padding': btnPadding, 'margin': btnPosition() }}>{btnText || ''}</button>}
                {btnOutline && <button onClick={handleModalBtn} style={{ 'backgroundColor': 'transparent', 'color': color, 'border': '1px solid white', 'borderRadius': btnBorderRadius }}>{btnText || ''}</button>}
                {btnCross && <div className={styles.cross} onClick={handleCrossBtn} style={{ backgroundColor: crossColor }}>
                <svg className={styles.close} height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="15px" ><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg></div>}
            </div>
        </div>
    );
};

export default CustomizableReactModal;