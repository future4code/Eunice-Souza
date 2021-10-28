export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type authenticationData = {
 id: string,
 role: USER_ROLES
}


export type user = {
    
    id: string,
    name: string,
    email: string,
    password: string
    
}

// const Heloa = new user
// const user = new User('1', 'Heloa','Heloa@hotmail.com', '2543688')