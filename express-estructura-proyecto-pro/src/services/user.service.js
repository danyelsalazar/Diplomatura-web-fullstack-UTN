// aqui manejaremos la logica de negocio, es decir, lo que hace cada endpoint, como se relacionan los datos, etc
// aqui no se manejan las rutas, eso se hace en el router

const users = []

// consultamos los usuarios
export const getUsers = ()=>{
    return users
}

// creamos un usuario
export const createUser = (nombre, edad)=>{
    const newUser = {
        id : crypto.randomUUID(),
        nombre,
        edad
    };

    users.push(newUser)
    return newUser
};

// consultamos usuario por id

export const getUserById = (id)=>{
    return users.find(user => user.id === id)
}

// eliminamos un usuario
export const deleteUser = (id)=>{
    // obtenemos el indice del usuario a eliminar
    const index = users.findIndex(user => user.id === id)
    // verificamos si lo consiguio
    if(index === -1) return null
    // eliminamos y retornamos el usuario
    return users.splice(index,1)[0]
    
}

// actualizar un ussuario
export const updateUser = (id, nombre , edad)=>{
    const user = users.find(user=> user.id === id)

    if(!user) return null

    user.nombre = nombre
    user.edad = edad

    return user
}

