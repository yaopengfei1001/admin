/**
 * 把常量映射到计算属性
 *
 * @param names
 */
export const mapConstants = (names) => {
  const mapped = {}
  names.forEach((n) => {
    mapped[n] = () => {
      return eval(n)
    }
  })
  return mapped
}

export const IMAGE_EXTS = [
  'jpg', 'jpeg', 'gif', 'png', 'bmp', 'ico', 'webp', 'svg', 'tiff',
]

/**
 * 所有权限
 *
 * @type {string}
 */
export const PERMISSION_PASS_ALL = 'pass-all'

/**
 * 超管角色
 *
 * @type {string}
 */
export const ROLE_ADMIN = 'administrator'

/**
 * 配置的类型
 */
export const CONFIG_TYPES = {
  INPUT: 'input',
  TEXTAREA: 'textarea',
  FILE: 'file',
  SINGLE_SELECT: 'single_select',
  MULTIPLE_SELECT: 'multiple_select',
}
