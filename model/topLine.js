// +----------------------------------------------------------------------
// | 广西西途比网络科技有限公司 www.c2b666.com
// +----------------------------------------------------------------------
// | 功能描述: 头条模型
// +----------------------------------------------------------------------
// | 时　　间: 2018
// +----------------------------------------------------------------------
// | 代码创建: 朱荻 <292018748@qq.com>
// +----------------------------------------------------------------------
// | 版本信息: V1.0.0
// +----------------------------------------------------------------------
// | 代码修改:（修改人 - 修改时间）
// +----------------------------------------------------------------------
import Model from '../common/model'
export default class TopLine extends Model {

  list(callback) {
    this.request({ url: 'Service/Terminal/topLine', params: {}, callback: callback});
  }

}