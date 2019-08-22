import React from 'react';

export const ProgressPopUp = props => {
    const { userProgressData } = props;
    return (
<div className="ProgressPopUp">
                    <i
                        onClick={e => e.target.parentNode.remove()}
                        className="ProgressPopUp-close">x
                        </i>
                    <div>
                        <h2>Your progress is:</h2>
                        <p>
                            Scheduled tasks:
                        {userProgressData.totalTaskNum}
                        </p>
                        <p>
                            Completed Tasks:
                        {userProgressData.completedTasks}
                        </p>
                        <p>
                            Undone Tasks:
                        {userProgressData.unDoneTasks}
                        </p>
                    </div>
                    <div className="Progress-container">
                        <h2>Improved performance</h2>
                        <span className="Progress-container-item">
                            health:
                            {userProgressData.progressOnWheel.health}
                        </span>
                        <span className="Progress-container-item">
                            finance:
                            {userProgressData.progressOnWheel.finance}
                        </span>
                        <span className="Progress-container-item">
                            career:
                            {userProgressData.progressOnWheel.career}
                        </span>
                        <span className="Progress-container-item">
                            leisure:
                            {userProgressData.progressOnWheel.leisure}
                        </span>
                        <span className="Progress-container-item">
                            relatives:
                            {userProgressData.progressOnWheel.relatives}
                        </span>
                    </div>
                </div>
    )
}