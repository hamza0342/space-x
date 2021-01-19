import React  from 'react';
import {useMissionQuery} from './../../generated/graphql';
import DetailOfMission from './Detail';
interface OwnProps {
  id: number;
}
const Missions = ({ id }: OwnProps) => {

     const { data, loading, error } = useMissionQuery({
      variables: { id: String(id) },
         });
         if (loading)
          return <h1>Loading....</h1>
         if (error || !data)
          return <h1>Error</h1> 
          
    return (
            <div>
            <DetailOfMission data={data}/>
            </div>
       
    )
}

export default Missions;