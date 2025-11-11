"use client"
import { UserDetailContext } from '@/context/UsserDetailContext';
import { supabase } from '@/services/supabaseClient'
import React, { useContext, useEffect, useState } from 'react'

function provider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        // On mount, attempt to load/create the current user
        CreateNewUser();
    }, []);

    const CreateNewUser = () => {
            supabase.auth.getUser().then(async ({ data: { user } }) => {

            // Check if the user already exists in our Users table
            let { data: Users, error } = await supabase
                .from('Users')
                .select("*")
                .eq('email', user.email);
                console.log(Users)

            // If the user does not exist, create a new user
            if (Users.length === 0) {
               const {data, error} =  await supabase
                    .from('Users')
                    .insert([
                        { 
                            name: user_metadata?.name,
                            email: user.email,
                            picture: user_metadata?.picture 

                        }
                    ])
                    console.log(data);
                    setUser(data);
                    return;
            }
                    setUser(Users[0]);
            })
        }

    return (
        <UserDetailContext.Provider value={{user,setUser}}> 
        <div> {children} </div>
        </UserDetailContext.Provider>
    )
}


export default provider

export const useUser = () => {
    const context = useContext(UserDetailContext);
    return context;
}