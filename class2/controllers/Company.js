//step-1
const Company = require("../modals/Company.js");

//step-2 create company
exports.createCompany = async (req, res) => {
    try {
        // step-1 get the data from req.body
        console.log("Ram Ram")
        const { cName, totolEmployee, cAddress } = req.body;
        console.log("satya hai")
        //step-2 valid data ko check karo khi null ya khali ya undefined to nhi aa rha hai
        if (!cName || !totolEmployee || !cAddress) {
            return res.status(204).json({
                success: false,
                message: "Data is null",
            })
        }


        // step-3 agar mera sab kuch shi hai to company ko db me daal do
        const cData = await Company.create({ cName, totolEmployee, cAddress });

        //step-4 db me chala gya hai data to user ko json me form me return kar do 
        return res.status(201).json({
            success: true,
            message: "Company created Successfully",
            data: cData
        })

    }
    catch (error) {
        console.log("getting error in create company Controller", error);
        return res.status(500).json({
            success: false,
            message: "Inter server errir in creater company controller",
            error: error.message
        })
    }
}


//step-3 all company
exports.getAllCompany = async (req, res) => {
    try {



        // step-1 find all data 
        const cData = await Company.find();
        // check kar lo company me hai ya ek bhi nhi hai

        if (cData.length <= 0) {
            //step-4 db me chala gya hai data to user ko json me form me return kar do 
            return res.status(404).json({
                success: true,
                message: "No company found",
                data: cData
            })
        }

        //step-4 db me chala gya hai data to user ko json me form me return kar do 
        return res.status(200).json({
            success: true,
            message: "All Company fetched Successfully",
            data: cData
        })

    }
    catch (error) {
        console.log("getting error in getAllCompany Controller", error);
        return res.status(500).json({
            success: false,
            message: "Inter server errir in getAllCompany controller",
            error: error.message
        })
    }
}



//step-4 single company
exports.getSingleCompany = async (req, res) => {
    try {
        // step-1 get the data from req.body
        console.log("Ram Ram")
        const { cId } = req.body;
        console.log("satya hai")
        //step-2 valid data ko check karo khi null ya khali ya undefined to nhi aa rha hai
        if (cId === "") {
            return res.status(204).json({
                success: false,
                message: "cID is imp cant be empty",
            })
        }


        // step-3 agar mera sab kuch shi hai to company ko db me daal do
        const cData = await Company.findById({ _id: cId });

        //step-4 db me chala gya hai data to user ko json me form me return kar do 
        return res.status(200).json({
            success: true,
            message: "Single Company data fetched Successfully",
            data: cData
        })

    }
    catch (error) {
        console.log("getting error in getSingleCompany Controller", error);
        return res.status(500).json({
            success: false,
            message: "Inter server errir in getSingleCompany  controller",
            error: error.message
        })
    }
}


//step-6 delete single company
exports.deleteSingleCompany = async (req, res) => {
    try {
        // step-1 get the data from req.body

        const { cId } = req.body;
        //step-2 valid data ko check karo khi null ya khali ya undefined to nhi aa rha hai
        if (cId === "") {
            return res.status(204).json({
                success: false,
                message: "cID is imp cant be empty",
            })
        }

        // step-3 If id is valied check id is exist or not in db
        const cData = await Company.findById({ _id: cId });

        if (!cData) {
            return res.status(404).json({
                success: false,
                message:   `this ${cId} does not exist in our db`,
            })
        }

        // step-> remove the enrty from the data 
        await Company.findByIdAndDelete(cId);


        //step-4 db me chala gya hai data to user ko json me form me return kar do 
        return res.status(201).json({
            success: true,
            message: "Company deleted Successfully",
            data: cData
        })

    }
    catch (error) {
        console.log("getting error in delete single company Controller", error);
        return res.status(500).json({
            success: false,
            message: "Inter server error delete single controller",
            error: error.message
        })
    }
}

//step-7 update single company
exports.updateSingleCompany = async (req, res) => {
    try {
        // step-1 get the data from req.body

        const { cId ,cName, totolEmployee, cAddress} = req.body;
        console.log(cId)
        //step-2 valid data ko check karo khi null ya khali ya undefined to nhi aa rha hai
        if (cId === "") {
            return res.status(204).json({
                success: false,
                message: "cID is imp cant be empty",
            })
        }


          if (!cName || !totolEmployee || !cAddress) {
            return res.status(204).json({
                success: false,
                message: "Data is null",
                error: error.message
            })
        }


        // step-3 If id is valied check id is exist or not in db
        const cData = await Company.findById({ _id: cId });

        if (!cData) {
            return res.status(404).json({
                success: false,
                message:   `this ${cId} does not exist in our db`,
            })
        }




        // step-> remove the enrty from the data 
        await Company.findByIdAndUpdate({_id:cId},{cName, totolEmployee, cAddress});


        //step-4 db me chala gya hai data to user ko json me form me return kar do 
        return res.status(201).json({
            success: true,
            message: "Company details updated Successfully",
            data: cData
        })

    }
    catch (error) {
        console.log("getting error in update single company Controller", error);
        return res.status(500).json({
            success: false,
            message: "Inter server error update single controller",
            error: error.message
        })
    }
}