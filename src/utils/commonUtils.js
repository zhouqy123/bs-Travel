// 路由判断
/**
 * @param choosePath 要去的路由
 * @param routePath 当前的路由
 */
function routeDisable(choosePath,routePath){
    if(choosePath = routePath){
        return false
    }else{
        return true
    }
}

export {
    routeDisable,
}