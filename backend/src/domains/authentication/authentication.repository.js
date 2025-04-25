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
                email: data.email,
                phone_number: data.phone_number,
                password_hash: data.password,
                confirm_password: data.confirm_password
            }
        });
    }

}
