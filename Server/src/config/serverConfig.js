import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.PORT || 3007
export const MONGODB_URI = process.env.MONGODB_URI
export const ACCESS_KEY_SECRET = process.env.ACCESS_KEY_SECRET
export const ACCESS_KEY_EXPIRE = process.env.ACCESS_KEY_EXPIRE;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;