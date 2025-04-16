import jwt from 'jsonwebtoken';
import AccountService from '../domains/account/account.service.js';


const OnlyMeMeddleware = async (req, res, next) => {
    try {
        const { username } = req.params;
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const account = await AccountService.find_by_username(username);

        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        if (decoded.id !== account.id) {
            return res.status(403).json({ message: 'Nice try, but you can only perform this operation on your own account' });
        }

        if (account.deleted_at) {
            return res.status(403).json({ message: 'Your account has been deleted, please recover it first' });
        }

        // Store decoded and account info for next middleware or controller
        req.user = decoded;
        req.account = account;

        next();
    } catch (err) {
        next(err);
    }
}

export default OnlyMeMeddleware