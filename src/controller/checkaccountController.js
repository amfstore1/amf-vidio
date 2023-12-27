import axios from 'axios'
import 'dotenv/config'

const endpoint = process.env.API_ENDPOINT
const endpoint2 = process.env.API_ENDPOINT2
const amfcode = process.env.AMFCODE
const linktools = process.env.TOOLS
const linkpb = process.env.PEBEH

const vidiodaftar = process.env.VIDIO_DAFTAR
const vidiologin = process.env.VIDIO_LOGIN
const vidiosubs = process.env.VIDIO_SUBS
const vidiotv = process.env.VIDIO_TV
const vidiopass = process.env.VIDIO_PASS


export const vidioDaftar = async (req, res) => {
    const visitorid = Math.floor(1000000000000000 + Math.random() * 9000000000000000);

    const body = `email=${req.params.email}&password=${req.params.password}`;

    try {
        const checkDaftar = await axios.post(vidiodaftar, body, {
            headers: {
                'Host': 'api.vidio.com',
                'referer': 'android-app://com.vidio.android',
                'x-api-platform': 'app-android',
                'x-api-auth': 'laZOmogezono5ogekaso5oz4Mezimew1',
                'user-agent': 'vidioandroid/6.7.5-68a0b87f64 (3189545)',
                'x-api-app-info': 'android/9/6.7.5-68a0b87f64-3189545',
                'accept-language': 'id',
                'content-type': 'application/x-www-form-urlencoded',
                'accept-encoding': 'gzip',
                'x-visitor-id': `${visitorid}`
            },
        });

        const responDaftar = checkDaftar.data;
        if(responDaftar.auth.active == true) {
            const tokenUser = responDaftar.auth_tokens.access_token
            const authtokenUser = responDaftar.auth.authentication_token
            res.status(200).json({
                status: 200,
                  message: 'Register Success',
                  tokenUser: tokenUser,
                  authtokenUser: authtokenUser,
            })
        } 
    } catch (error) {
        console.error('Error:', error);
        res.status(504).json({
            status: 504,
            message: 'Error Silahkan Daftar Ulang!',
        });
    }
};


export const vidioLogin = async (req, res) => {
    const visitorid = Math.floor(1000000000000000 + Math.random() * 9000000000000000);

    const body = `login=${req.params.email}&password=${req.params.password}`;

    try {
        const checkLogin = await axios.post(vidiologin, body, {
            headers: {
                'referer': 'android-app://com.vidio.android',
                'x-api-platform': 'app-android',
                'x-api-auth': 'laZOmogezono5ogekaso5oz4Mezimew1',
                'user-agent': 'vidioandroid/6.7.5-68a0b87f64 (3189545)',
                'x-api-app-info': 'android/9/6.7.5-68a0b87f64-3189545',
                'accept-language': 'id',
                'accept-encoding': 'gzip',
                'x-visitor-id': `${visitorid}`,
                'content-type': 'application/x-www-form-urlencoded',
            },
        });

        const responLogin = checkLogin.data;
        if(responLogin.auth.active == true) {
            const tokenUser = responLogin.auth_tokens.access_token
            const authtokenUser = responLogin.auth.authentication_token
            res.status(200).json({
                status: 200,
                  message: 'Success Login',
                  tokenUser: tokenUser,
                  authtokenUser: authtokenUser,
            })
        } 
    } catch (error) {
        console.error('Error:', error);
        res.status(504).json({
            status: 504,
            message: 'Email Atau Password Salah',
        });
    }
};

export const vidioSubs = async (req, res) => {
    const visitorid = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    const { email, authtokenUser, tokenUser } = req.params;
    
    try {
        const checkSubs = await axios.get(vidiosubs, {
            headers: {
            'referer': 'android-app://com.vidio.android',
            'x-api-platform': 'app-android',
            'x-api-auth': 'laZOmogezono5ogekaso5oz4Mezimew1',
            'user-agent': 'vidioandroid/6.7.5-68a0b87f64 (3189545)',
            'x-api-app-info': 'android/9/6.7.5-68a0b87f64-3189545',
            'accept-language': 'id',
            'accept-encoding': 'gzip',
            'if-modified-since': 'Sun, 02 Jul 2023 08:22:00 GMT',
            'x-user-email': `${email}`,
            'x-user-token': `${authtokenUser}`,
            'x-visitor-id': `${visitorid}`,
            'x-authorization': `${tokenUser}`,
        }
        })
        const responSubs = checkSubs.data
        if(responSubs.subscriptions[0].package.name) {
        const namasubs = responSubs.subscriptions[0].package.name
        const durations = responSubs.subscriptions[0].package.day_duration
        res.status(200).json({
                status: 200,
                  message: 'Success Cek Subscriptions',
                  namasubs: namasubs,
                  durations: durations,
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error'
        })
    }
}

export const vidioTv = async (req, res) => {
    const visitorid = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    const { email, authtokenUser, tokenUser, codenya } = req.params;
         const code1 = parseInt(codenya[0]);
        const code2 = parseInt(codenya[1]);
        const code3 = parseInt(codenya[2]);
        const code4 = parseInt(codenya[3]);
        const code5 = parseInt(codenya[4]);
        const code6 = parseInt(codenya[5]);
        const codeall = `${code1}${code2}${code3}${code4}${code5}${code6}`;
    try {
        const checkTv = await axios.get(`${vidiotv}?utf8=%E2%9C%93&code-1=${code1}&code-2=${code2}&code-3=${code3}&code-4=${code4}&code-5=${code5}&code-${code6}=4&code=${codeall}`, {
            headers: {
                'referer': 'android-app://com.vidio.android',
                'x-api-platform': 'app-android',
                'x-api-auth': 'laZOmogezono5ogekaso5oz4Mezimew1',
                'user-agent': 'vidioandroid/6.7.5-68a0b87f64 (3189545)',
                'x-api-app-info': 'android/9/6.7.5-68a0b87f64-3189545',
                'accept-language': 'id',
                'accept-encoding': 'gzip',
                'x-user-email': `${email}`,
                'x-user-token': `${authtokenUser}`,
                'x-visitor-id': `${visitorid}`,
                'x-authorization': `${tokenUser}`,
            }
        })
        const responTv = checkTv.data
        
        if (responTv.match(/Kode yang anda masukan salah/)) {
            console.log("KODE TV SALAH")
              res.status(504).json({
                status: 504,
                  message: 'Gagal Login TV'
            })
                                    } else {
                                         console.log("KODE TV BENAR")
                                        res.status(200).json({
                status: 200,
                  message: 'Success Login TV'
            })
                                    }
    } catch (error) {
        console.log(error)
        res.status(504).json({
            status: 504,
            message: 'Error'
        })
    }
}

export const vidioPass = async (req, res) => {
    const visitorid = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    const { email, password, passwordnew, authtokenUser, tokenUser } = req.params;
    const body = JSON.stringify({
  'current_password': password,
  'password': passwordnew,
  'password_confirmation': passwordnew
});
    console.log(body)
    try {
         const checkPass = await axios.patch(vidiopass, body, {
            headers: {
    'Host': 'api.vidio.com',
    'Referer': 'android-app://com.vidio.android',
    'X-Api-Platform': 'app-android',
    'X-Api-Auth': 'laZOmogezono5ogekaso5oz4Mezimew1',
    'User-Agent': 'vidioandroid/6.15.7-5849767c9f (3189623)',
    'X-Api-App-Info': 'android/7.1.2/6.15.7-5849767c9f-3189623',
    'Accept-Language': 'id',
    'Content-Type': 'application/json; charset=UTF-8',
    'Content-Length': '96',
    'Accept-Encoding': 'gzip, deflate, br',
    'x-user-email': `${email}`,
    'x-user-token': `${authtokenUser}`,
    'x-visitor-id': `${visitorid}`,
    'x-authorization': `${tokenUser}`,
  }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        const responPass = checkPass.data
        console.log(responPass)
        // if(responPass.message == "Kata sandi diperbarui") {
        //     res.status(200).json({
        //         status: 200,
        //         message: "Berhasil Mengganti Password!"
        //     })
        // }
       } catch (err) {
        console.log(err)
       }

}

export const checkAccountML = async (req, res) => {
    const body = `voucherPricePoint.id=4156&voucherPricePoint.price=24254.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&user.zoneId=${req.params.zoneid}&voucherTypeName=MOBILE_LEGENDS&voucherTypeId=5&gvtId=9&shopLang=id_ID`
      try {
        const ml = await axios.post(endpoint, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const mlresult = ml.data
        console.log(mlresult)
        if (mlresult.errorCode === 1003) {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        } else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Mobile Legends',
                    id: mlresult.confirmationFields.userId,
                    name: mlresult.confirmationFields.username,
                    country: mlresult.confirmationFields.country
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountAOV = async (req, res) => {
    const body = `voucherPricePoint.id=7946&voucherPricePoint.price=10000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&voucherTypeName=AOV&shopLang=id_ID`

    try {
        const aov = await axios.post(endpoint, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const aovresult = aov.data
        if (aovresult.errorCode === 1003) {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        } else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Arena Of Valor',
                    id: aovresult.confirmationFields.userId,
                    name: aovresult.confirmationFields.roles[0].role,
                    country: aovresult.confirmationFields.country
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountCOD = async (req, res) => {
    const body = `voucherPricePoint.id=46114&voucherPricePoint.price=5000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&voucherTypeName=CALL_OF_DUTY&shopLang=id_ID`

    try {
        const cod = await axios.post(endpoint, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const codresult = cod.data
        if (codresult.errorCode === 22) {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        } else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Call Of Duty Mobile',
                    id: codresult.confirmationFields.userId,
                    name: codresult.confirmationFields.roles[0].role,
                    country: codresult.confirmationFields.country
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountSM = async (req, res) => {
    const body = `voucherPricePoint.id=256513&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&user.zoneId=global-release&voucherTypeName=SAUSAGE_MAN&shopLang=id_ID`

    try {
        const sm = await axios.post(endpoint, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const smresult = sm.data
        if (smresult.errorCode == -100) {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        } else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Sausage Man',
                    id: smresult.confirmationFields.userId,
                    name: smresult.confirmationFields.username,
                    country: 'Global'
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountGI = async (req, res) => {
    let zoneData = {
        zoneId: '',
        server: ''
    }

    if (req.params.id.startsWith(6)) {
        zoneData = {
            zoneId: 'os_usa',
            server: 'America'
        }
    } else if (req.params.id.startsWith(7)) {
        zoneData = {
            zoneId: 'os_euro',
            server: 'Europe'
        }
    } else if (req.params.id.startsWith(8)) {
        zoneData = {
            zoneId: 'os_asia',
            server: 'Asia'
        }
    } else if (req.params.id.startsWith(9)) {
        zoneData = {
            zoneId: 'os_cht',
            server: 'SAR (Taiwan, Hong-Kong, Macao)'
        }
    }

    const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&user.zoneId=${zoneData.zoneId}&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`

    try {
        const gi = await axios.post(endpoint, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const giresult = gi.data
        if (giresult.errorCode == '-102') {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        } else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Genshin Impact',
                    id: giresult.confirmationFields.userId,
                    name: giresult.confirmationFields.username,
                    server: zoneData.server
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}
