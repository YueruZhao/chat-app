import React from 'react';

const UserName = ({ users }) => (
    <div>
    
      {
        users
          ? (
            <div>
              
              <div>
                <ul>
                  {users.map(({name}) => (
                    <li key={name}>
                      {name}
                     
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
          : null
      }
    </div>
  );

  
  
export default UserName;