/*包含n个接口请求函数
* 函数的返回值：promise*/
import ajax from './ajax'

// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
// [1、根据经纬度获取位置详情]
export const reqAddress = (geoHash) => ajax(`${BASE_URL}/position/${geoHash}`)
// [2、获取食品分类列表]
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})

// [4、根据经纬度和关键字搜索商铺列表]
export const reqShopList = (keyword, geohash) => ajax(BASE_URL+'/search_shops',{keyword, geohash})

// [5、获取一次性验证码]

// [6、用户名密码登陆]
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqConfirmCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqCodeLogin= (phone, code) => ajax(BASE_URL+'/login_sms', {phone,code}, "POST")

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')

// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(BASE_URL+'/logout')
