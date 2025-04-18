import prismaClient from "../../application/database.js";

export default class AuthenticationRepository {

    static async find(type, value) {
        const optionsMap = {
            email: { where: { email: value }, select: { email: true } },
            phone_number: { where: { phone_number: value }, select: { phone_number: true } },
            user_email: { where: { email: value } },
            user_phone_number: { where: { phone_number: value } },
        };

        const options = optionsMap[type];
        if (!options) {
            throw new Error(`Invalid find type: '${type}'. Expected one of: ${Object.keys(optionsMap).join(", ")}`);
        }
        return await prismaClient.user.findUnique(options);
    }

    static async create(data) {
        return await prismaClient.user.create({
            data: {
                full_name: data.full_name,
                birth_date: data.birth_date,
                gender: data.gender,
                custome_gender: data.custome_gender,
                greeting_preference: data.greeting_prefrence,
                custom_greeting_prefrence: data.custom_greeting_prefrence,
                email: data.email,
                phone_number: data.phone_number,
                password_hash: data.password,
                confirm_password: data.confirm_password
            }
        });
    }

    static async update_last_login(user_id) {
        return await prismaClient.user.update({
            where: { id: user_id },
            data: { last_login_at: new Date() }
        });
    }

}
