/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 13:37:16
 * @LastEditTime: 2022-11-02 13:37:45
 * @FilePath: \cicd-node\src\services\articleConfig.js
 */
import articleModel from '../model/articleConfig'

export async function findJobPage (page, pageSize, params) {
  Object.keys(params).forEach(key => {
    if (!params[key]) Reflect.deleteProperty(params, key)
  })

  const DocumentUserList = await articleModel.find(params)
    .skip((page - 1) * pageSize)
    .limit(pageSize)

  return DocumentUserList.map(_ => _.toObject())
}

export function countJob (params) {
  Object.keys(params).forEach(key => {
    if (!params[key]) Reflect.deleteProperty(params, key)
  })

  return articleModel.count(params)
}

export function save (params) {
  return new articleModel(params).save()
}

export function update (id, params) {
  return articleModel.findByIdAndUpdate(id, params)
}

export function deleteById (id) {
  return articleModel.findByIdAndDelete(id)
}

export function findJobById (id) {
  return articleModel.findById(id)
}