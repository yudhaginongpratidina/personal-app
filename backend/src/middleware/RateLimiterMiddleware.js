import rateLimit from 'express-rate-limit'

// Helper untuk konversi ms ke format waktu manusiawi
const formatMs = (ms) => {
    const seconds = Math.ceil(ms / 1000)
    if (seconds < 60) return `${seconds} second${seconds !== 1 ? 's' : ''}`
    const minutes = Math.ceil(seconds / 60)
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`
}

// Middleware rate limit yang fleksibel dengan parameter dalam menit
const RateLimiterMiddleware = ({ windowMinutes = 15, max = 100 }) => {
    return rateLimit({
        windowMs: windowMinutes * 60 * 1000, // Ubah windowMinutes ke milidetik
        max, // Maksimal request per IP dalam waktu windowMs
        standardHeaders: true,
        legacyHeaders: false,
        handler: (req, res) => {
            const retryAfter = res.getHeader('Retry-After')
            const waitTime = retryAfter
                ? formatMs(Number(retryAfter) * 1000)
                : formatMs(windowMinutes * 60 * 1000)

            res.status(429).json({
                status: 429,
                error: `🚫 Too many requests. Please wait ${waitTime} before trying again.`
            })
        }
    })
}

export default RateLimiterMiddleware
