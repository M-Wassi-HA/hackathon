import express from 'express';
import { addBeneficiary, generateNewToken, getAllBeneficiaries, getBeneficiaryByCNIC } from '../controllers/beneficiaryController.js';


const beneficiaryRoutes = express.Router();


beneficiaryRoutes.post("/add-beneficiary", addBeneficiary); 
beneficiaryRoutes.get("/get-all-beneficiary", getAllBeneficiaries);
beneficiaryRoutes.get("/get-benificiary/:cnic", getBeneficiaryByCNIC); 
beneficiaryRoutes.get("/generate-new-token", generateNewToken); 


export default beneficiaryRoutes;