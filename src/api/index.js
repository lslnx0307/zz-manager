import request from '../utils/request';

/**
 * 用户列表
 * @param {*} query 
 */
export const listUser = query => {
    return request({
        url: '/user/list',
        method: 'post',
        data: query
    });
};

/**
 * 菜单列表
 * @param {*} query 
 */
export const listMenu = query => {
    return request({
        url: '/role/list',
        method: 'post',
        data: query
    });
}