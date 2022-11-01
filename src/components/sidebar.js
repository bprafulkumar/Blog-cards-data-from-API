import React,{useState,useRef, useEffect, useContext} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./sidebar.css"
// import data from  '../'
import data from '../../src/data.json'
import { border, borderBottom } from '@mui/system';
import { UserContext, UserDispatchContext } from '../context.js'


function Sidebar() {

    const [sidebar, setSidebar] = useState(false);
    const [tasksHeading , setTaskHeading] = useState("")
    const [assestdata , setAssetdata] = useState([])

    const contextInfo = useContext(UserContext)
    const setConextAssetData = useContext(UserDispatchContext)
    useEffect(() => {
        setTaskHeading(data.tasks[0])
        setAssetdata(data.tasks[0].assets)
        
    },[data])

    const refConatiner = useRef(0)
    const refheading = useRef(0)
    const reficon = useRef(0)
 
    const handleSetAssetData = (assetDataVal) => {
        setConextAssetData(assetDataVal)
    }
    
    const showSidebar = () => {
        setSidebar(!sidebar)
        if(!sidebar){
            refConatiner.current.style.width = "120px";
            refheading.current.style.display = "none"
            reficon.current.marginRight = "100px"
        }else{
            refConatiner.current.style.width = "250px";
            refheading.current.style.display = "block"
            reficon.current.marginRight = "100px"
        }
       
        
    }
    
    // console.log(assestdata,"hsggsgsgs")

  return (
    <div className='Side-container' ref={refConatiner}>
        <div className='side-top'>
            <h4 ref={refheading}>Journay Board</h4>
            <div className='icon-move-part' ref={reficon}>
                <MenuIcon className='menu-icon' onClick = {showSidebar}/>
            </div>
        </div>
            
        <h4 style={{textAlign: "center"}}>{tasksHeading.task_title}</h4>

        { !sidebar ? 
            assestdata.map((Values) =>{
                return <div key={Values.asset_id} >
                <div className='listofasset' >
                    <li className='listofasset1' onClick={()=>handleSetAssetData(Values)}>{Values.asset_title ? Values.asset_title : ""}</li>
                 </div>
             </div>
            }) : null
        }
    </div>
  )
}

export default Sidebar
