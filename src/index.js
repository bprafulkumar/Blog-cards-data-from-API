import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



{/* <div className='Maincontainer' key={value.task_id}>
                        
                        <div className='middle-body'>
                            <div className='top-heading'>
                                <h4>You Are Taking Challenges Of New Project</h4>
                            </div>

                        <div className='middle-heading'>
                                <h4>{value.task_title}</h4>
                        </div>
                        {
                            value.assets.map((assetdata) => {
                                
                               return (
                                <div className='small-cards' key={assetdata.asset_id}>
                                <div className='small-cards-pieces'>
                                    <div className='asset-heading'>
                                        <div className='black-heading'>
                                            <h4>{assetdata.asset_title}</h4>
                                        </div>

                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        
                                        <p>{assetdata.asset_description}</p>
                                        <img src={assetdata.display_asset_image ? true : null } alt='Images'/>
                                        <video src= {assetdata.display_asset_video} />
                                        </Collapse>
                                        <div style={{"display":"flex"}}>
                                        <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        >
                                        <ExpandMoreIcon />
                                        </ExpandMore>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                               )
                            })
                        }
                            
                        </div>
                    </div> */}
