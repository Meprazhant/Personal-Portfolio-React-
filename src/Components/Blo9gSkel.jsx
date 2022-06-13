import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Blo9gSkel({card}) {
  return (
    Array(card).fill(0).map((i)=>{
     return(
      <div>
        <SkeletonTheme baseColor="rgb(145, 145, 145)" highlightColor="#444">  
        <div className="Bcs">
            <div className="tit1">
            <Skeleton height={'100%'} width={'100%'}/>
            </div>
            <div className="tit1 taa">
            <Skeleton height={'100%'} width={'100%'}/>
            </div>
            <div className="tit1 wup">
            <Skeleton height={'100%'} width={'100%'}/>
            </div>
        
        </div>
        </SkeletonTheme>
    </div>
     ) 
    })
    
  )
}

export default Blo9gSkel