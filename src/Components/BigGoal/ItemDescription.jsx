import React, { useState } from 'react';

export const ItemDescription = props => {
    const [descShow, setDescShow] = useState(false);
    const opencloseDesc = () => {
        const flag = descShow ? false : true;
        setDescShow(flag);
    }
    
    return (
        <div className="BigGoalApplying-item-showDesc-wrap">
            <div className="BigGoalApplying-item-showDesc-btn" onClick={opencloseDesc}>
                <i className="BigGoalApplying-item-showDesc">i</i>
            </div>
            {descShow &&
                <div className="BigGoalApplying-item-description">
                    <p>Description</p>
                    <p className="BigGoalApplying-item-description-text">{props.text}</p>
                </div>}
        </div>
    )
}