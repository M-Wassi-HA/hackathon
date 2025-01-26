import Beneficiary from "../models/beneficiaryModel.js";
  

const addBeneficiary = async (req, res) => {
    try {
      const { cnic, name, phone, address, purpose } = req.body;
  
      const existingBeneficiary = await Beneficiary.findOne({ cnic });
      if (existingBeneficiary) {
        return res.status(400).json({ message: "Beneficiary already exists!" });
      }
  
      const today = new Date().toISOString().split("T")[0];
  
      const todayTokenCount = await Beneficiary.countDocuments({
        createdAt: {
          $gte: new Date(today), // Start of the day
          $lt: new Date(new Date(today).setDate(new Date(today).getDate() + 1)), 
        },
      });
  
      const tokenNumber = todayTokenCount + 1;
  
      const newBeneficiary = Beneficiary.create({
        cnic,
        name,
        phone,
        address,
        purpose,
        tokenNumber,
      })
  
      res.status(201).json({
        message: "Beneficiary added successfully",
        data: newBeneficiary,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

const getAllBeneficiaries = async (req, res) => {
    try {
        const beneficiaries = await Beneficiary.find();
        res.status(200).send({status: 200 , data: beneficiaries});
    } catch (error) {
        res.status(500).send({ message: "Server error", error: error.message });
    }
};

const getBeneficiaryByCNIC = async (req, res) => {
    try {
        const { cnic } = req.params;

        const beneficiary = await Beneficiary.findOne({ cnic });
        if (!beneficiary) {
            return res.status(404).send({ message: "Beneficiary not found!" });
        }

        res.status(200).send({status: 200 , data: beneficiary});
    } catch (error) {
        res.status(500).send({ message: "Server error", error: error.message });
    }
};

const generateNewToken = async (req, res) => {
    try {
      const { cnic, name, phone, address, purpose } = req.body;
  
      const today = new Date().toISOString().split("T")[0];
  
      let tokenRecord = await Token.findOne({ date: today });
      if (!tokenRecord) {
        tokenRecord = await Token.create({ date: today, lastToken: 1 });
      } else {
        tokenRecord.lastToken += 1;
        await tokenRecord.save();
      }
  
      let beneficiary = await Beneficiary.findOne({ cnic });
  
      if (beneficiary) {
        beneficiary.history.push({
          department: "Reception", 
          action: "Token Generated",
          remarks: purpose,
          timestamp: new Date(),
        });
        await beneficiary.save();
      } else {
        beneficiary = new Beneficiary({
          cnic,
          name,
          phone,
          address,
          purpose,
          history: [
            {
              department: "Reception", 
              action: "Token Generated",
              remarks: purpose,
              timestamp: new Date(),
            },
          ],
        });
        await beneficiary.save();
      }
  
      res.status(201).send({
        message: "Token generated successfully",
        tokenNumber: tokenRecord.lastToken,
        beneficiary,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  


export { addBeneficiary, getAllBeneficiaries, getBeneficiaryByCNIC , generateNewToken};