import aj from '../config/arcjet.js'

const arcjetMiddleware = async (req,res,next) =>{
    try {
        const decision=await aj.protect(req,{ requested: 1 });

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                return res.status(429).json({
                    error:'Too many requests'
                });
            }

            if(decision.reason.isBot()){
                return res.status(403).json({
                    error:'Bot detected'
                });
            }

            return res.status(403).json({
                error:'Access Denied'
            });
        }

        next();
    } catch (error) {
        console.log(`ArcJet middleware Error: ${error}`)
        next(error)
    }
}

export default arcjetMiddleware;