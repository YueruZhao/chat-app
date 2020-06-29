import React from 'react';

const RoomList = ({ rooms }) => (
    <div>
      {
        rooms
          ? (
            <div>     
              <div>
              <ul>
                {rooms.map(function(room, index){
                    return <li key={ index }>{room}</li>;
                  })}
            </ul>
              </div>
            </div>
          )
          : null
      }
    </div>
  );

  
  
export default RoomList;