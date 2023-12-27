import express from 'express'
import { checkAccountAOV, checkAccountCOD, vidioSubs, vidioTv, vidioPass, checkAccountGI, checkAccountML, checkAccountSM, vidioDaftar, vidioLogin } from '../controller/checkaccountController.js'

const checkaccount = express()
checkaccount.get('/vidiosubs/:email/:authtokenUser/:tokenUser', vidioSubs)
checkaccount.get('/vidiotv/:email/:authtokenUser/:tokenUser/:codenya', vidioTv)
checkaccount.get('/vidiopass/:email/:password/:passwordnew/:authtokenUser/:tokenUser', vidioPass)
checkaccount.get('/ml/:zoneid/:id', checkAccountML)
checkaccount.get('/aov/:id', checkAccountAOV)
checkaccount.get('/cod/:id', checkAccountCOD)
checkaccount.get('/gi/:id', checkAccountGI)
checkaccount.get('/sm/:id', checkAccountSM)
checkaccount.get('/vidiologin/:email/:password', vidioLogin)
checkaccount.get('/vidiodaftar/:email/:password', vidioDaftar)

export default checkaccount
