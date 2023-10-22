const not_found_handaler = (_req, _res, next)=>{ // _(undersocre) mean we not used if this sit after next that time _ not required
    const error = new Error('Resource not found')
    error.status = 404
    next(error)
}

const global_error_handaler = (error, req, res, next)=>{
    if (error.status) {
        return res.status(error.status).json({
            message: error.message
        })
    }
    res.status(500).json({message:'Something went wrong'})
}

module.exports = {
    not_found_handaler,
    global_error_handaler
}