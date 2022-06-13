import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function CardSkeleton({cards}) {
  return( 
    <SkeletonTheme baseColor="#202020" highlightColor="#444">  
   { Array(cards).fill(0).map((i)=>(
      <div className='projectCard' key={i+1}>
          <div className="t1" >
            <Skeleton height={'90%'} width={'100%'}/>
          </div>
          <div className="l1">
            <Skeleton height={'90%'}/>
          </div>
  
      </div>
    ))}
    </SkeletonTheme>
  )
}

export default CardSkeleton