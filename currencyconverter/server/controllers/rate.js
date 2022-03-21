const calculateRate = (param) => {
    let result = 1.95;
    switch(param){
        case 'EUR-BGN':
            result = 1.95;
            break;
        case 'BGN-EUR':
            result = 0.51;
            break;
        case 'USD-BGN':
            result = 1.77;  
            break;
        case 'BGN-USD':
            result = 0.56;
            break;
        case 'USD-EUR':
            result = 0.9;
            break;
        case 'EUR-USD':
            result = 1.11;
            break;
        default:
            result = 1;
            break;
    }
    return result;
}

export const getRate = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const result = await calculateRate(_id);
        res.status(200).json({
            rate: result,
        });
    } catch (error) {
        res.status(404).json({
          message: error.message,
        });
    }
};