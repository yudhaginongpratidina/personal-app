import {db} from "../../config/database/prisma.database.js";

export const get_all_client = async () => {
    const response = await db.user.findMany({
        select : {
            id : true,
            first_name : true,
            last_name : true,
            email : true,
            created_at : true
        }
    })
    return response
}

export const get_client_by_email = async (email) => {
    const response = await db.user.count({where : {email : email}})
    return response
}

export const get_client_by_id = async (id) => {
    const response = await db.user.findUnique(
        {where : {id : id}}
    )
    return response
}

export const create_client = async (data) => {
     const response = await db.user.create({
          data : {
                first_name : data.first_name,
                last_name : data.last_name,
                email : data.email,
                password : data.password,
                terms_and_conditions : data.terms_and_conditions
          },
          select : {
                id : true,
                first_name : true,
                last_name : true,
                email : true,
                created_at : true
          }
    })

     return response
}

export const update_client_by_id = async (id, data) => {
    const response = await db.user.update({
        where : {id : id},
        data : {
            first_name : data.first_name,
            last_name : data.last_name,
        }
    })
    return response
}

export const update_password_client_by_id = async (id, data) => {
    const response = await db.user.update({
        where : {id : id},
        data : {
            password : data.password
        }
    })
    return response
}

export const delete_client_by_id = async (id) => {
    const response = await db.user.delete({where : {id : id}})
    return response
}