
import React,{useEffect,useState,useContext} from 'react'
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import data from '../../src/data.json'
import { UserContext } from '../context.js'


import './Mainbody.css'
import Sidebar from './sidebar';


// console.log(data)
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function Mainbody() {
    const [expanded, setExpanded] = React.useState(false);
    const [assetdata , setAssetdata] = useState({})
    const [taskHeading, setTaskHeading] = useState('')

    const contextInfoAssetdata  = useContext(UserContext)


    useEffect(()=>{
        setAssetdata({})
    },[])


    useEffect(()=>{
      setTaskHeading(data.tasks[0].task_title)
      setAssetdata(contextInfoAssetdata)

    },[contextInfoAssetdata])

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };


console.log(assetdata,"AssetData")
// const Arraydata = [data]
  return (
    <div >
          <div className='side-bar'>
            <Sidebar/>
            </div>
            <div className='Maincontainer'>
            <div className='middle-body'>
                            <div className='top-heading'>
                                <h4>You Are Taking Challenges Of New Project</h4>
                            </div>

                                        <div className='middle-heading'>
                                            <h4>{taskHeading ? taskHeading : ''}</h4>
                                        </div>

                            <div className='small-cards'>
                                <div className='small-cards-pieces'>
                                   
                               
                          <div key={assetdata.asset_id} className="two-boxes">
                                <div className='asset-heading'>
                                                <div className='black-heading'>
                                                    <h4>{assetdata.asset_title}</h4>
                                                </div>

                                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                
                                                {/* <img src = {assetdata.display_asset_image} /> */}
                                                <p className='first-card'>{assetdata.display_asset_reflection ? assetdata.display_asset_reflection : ""}</p>
                                                
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
                                 <div className='asset-heading'>
                                                <div className='black-heading'>
                                                    <h4>{assetdata.asset_title}</h4>
                                                </div>

                                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                
                                                {/* <img src = {assetdata.display_asset_image} />
                                                <p>{assetdata.asset_type ? assetdata.asset_type  : ""}</p> */}
                                                {assetdata.asset_content ?<div>
                                                <div className='second-box'>
                                                   <p>{assetdata.asset_content ? assetdata.asset_content : "" }</p>
                                                </div>
                                                <div className='submit-btns'>
                                                  <button>Submit</button>
                                                </div>
                                                </div> : " "
                                                }
                                                
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

                          <div key={assetdata.asset_id} className="two-boxes">
                                <div className='asset-heading'>
                                                <div className='black-heading'>
                                                    <h4>{assetdata.asset_title}</h4>
                                                </div>

                                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                
                                             {assetdata.display_asset_docs ?
                                              <div>
                                                <iframe src={assetdata.display_asset_docs ? assetdata.display_asset_docs: " "} height="600" width ="500"/>
                                                </div> : ""
                                             }
                                                
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
                                 <div className='asset-heading'>
                                                <div className='black-heading'>
                                                    <h4>{assetdata.asset_title}</h4>
                                                </div>

                                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                
                                                {/* <img src = {assetdata.display_asset_image} /> */}
                                                {/* <p>{assetdata.display_asset_image ? assetdata.display_asset_image :" "}</p> */}
                                                {
                                                  assetdata.display_asset_image ? <div>
                                                  <img className='image-url' src={assetdata.display_asset_image ? assetdata.display_asset_image :" "} alt="image" />
                                                  </div> : " "
                                                } 
                                                
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

                          <div key={assetdata.asset_id} className="two-boxes">
                                <div className='asset-heading'>
                                                <div className='black-heading'>
                                                    <h4>{assetdata.asset_title}</h4>
                                                </div>

                                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                
                                                {/* <img src = {assetdata.display_asset_image} /> */}
                                                {/* <audio src={assetdata.display_asset_url ? assetdata.display_asset_url :''} /> */}
                                                {
                                                  assetdata.display_asset_url ? <div><audio className='audio' src={assetdata.display_asset_url ? assetdata.display_asset_url : " " } controls autoPlay/>
                                                  <p>{assetdata.asset_description}</p></div> : ""
                                                }
                                                <p>{assetdata.asset_description}</p>
                                                

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
                                 <div className='asset-heading'>
                                                <div className='black-heading'>
                                                    <h4>{assetdata.asset_title}</h4>
                                                </div>

                                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                
                                                {/* <img src = {assetdata.display_asset_image} /> */}
                                                {/* <p>{assetdata.display_asset_video ? assetdata.display_asset_video: '' }</p> */}
                                                {
                                                  assetdata.display_asset_video ? <embed className='video-part' src={assetdata.display_asset_video ? assetdata.display_asset_video: ''} controls autoPlay /> : ""
                                                }
                                                
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
                </div>
                            
                </div>
        </div>
        
        <button className='submit-btn'>SUBMIT</button>
</div>
  )
}

export default Mainbody
