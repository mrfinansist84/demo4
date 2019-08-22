import React, { useState, useEffect } from 'react';
import { showComponent,
    textForImport,
    textForExport,
    textForUse,
    textForDelete,
    textForCreate
} from './utils';
import { BigGoalCreating } from './BigGoalCreating';
import { BigGoalApplying } from './BigGoalApplying';
import Header from '../Header/Header';
import './BigGoal.scss';
import { importBGToUser, exportBGToCommunity } from '../../DAL/bigGoalFirebase';

const BigGoal = props => {
    const [statebg, setStatebg] = useState({
        create: true,
        delete: false,
        import: false,
        export: false,
        use: false
    });
    const {
        useBigGoal,
        bigGoalPersonal,
        showBigGoalForExport,
        bigGoalСommunity,
        showBigGoalForImport,
        createBG,
        deleteBG
    } = props;
    const menuCollection = Object.keys(statebg);
    const toggleTab = e => {
        showComponent(setStatebg, e);
    };
    useEffect(() => {
        if (!bigGoalPersonal && !bigGoalСommunity) {
            showBigGoalForExport('bigGoalPersonal');
            showBigGoalForImport('bigGoalСommunity');
        }
    });
    return (
      <div>
          <div className="bigGoal-flex-wrap">
          <Header />
          <div className="ProfilePageWrapper">
              <div className="big-goal-wrap">
                  <nav className="big-goal-menu">
                      {menuCollection.map(btn => {
                            return (
                              <div onClick={toggleTab}
                                  className="big-goal-menu-btn" 
                                  key={btn}> 
                                  {btn}
                                </div>
                            );
                        })}
                    </nav>
                  <div className="big-goal-field">
                      {statebg.create && (
                              <BigGoalCreating applyBG={createBG} 
                              textForCreate={textForCreate}
                              updateBGCollection={showBigGoalForExport}
                            collection={'bigGoalPersonal'}/>)}

                      {statebg.delete && (<BigGoalApplying
                            targetEl={'delete'}
                            bigGoals={bigGoalPersonal}
                            applyBG={deleteBG} 
                            textForSection={textForDelete}
                            updateBGCollection={showBigGoalForExport}
                            collection={'bigGoalPersonal'}/>)}

                      {statebg.import && (<BigGoalApplying
                            targetEl={'import'}
                            bigGoals={bigGoalСommunity}
                            applyBG={importBGToUser} 
                            textForSection={textForImport}
                            updateBGCollection={showBigGoalForExport}
                            collection={'bigGoalPersonal'}/>)}

                      {statebg.export && (<BigGoalApplying
                            targetEl={'export'}
                            bigGoals={bigGoalPersonal}
                            applyBG={exportBGToCommunity} 
                            textForSection={textForExport}
                            updateBGCollection={showBigGoalForImport}
                            collection={'bigGoalСommunity'}/>)}

                      {statebg.use && (<BigGoalApplying
                            targetEl={'use'}
                            bigGoals={bigGoalPersonal}
                            applyBG={useBigGoal}
                            textForSection={textForUse}
                            />)}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BigGoal;
