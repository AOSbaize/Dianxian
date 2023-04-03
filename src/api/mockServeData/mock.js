import Mock from 'mockjs'
import permission from './permission.js'
Mock.mock(/api\/permission\/getMenu/,permission.getMenu)