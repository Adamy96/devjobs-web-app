import React from 'react'
import styles from './styles.module.scss'

const Typography = (props: ITypography) => {
  const variantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    button: 'p',
    buttonTransparent: 'p',
    caption: 'span'
  }

  const resolveStyles = ({ align, variant, weight, textShadow, ellipsis, className }: ITypography) => {
    const resolvedStyles = [
      styles.typography,
      styles[`variant-${variant}`]
    ]

    if (align) resolvedStyles.push(styles[`align-${align}`])
    if (weight) resolvedStyles.push(styles[`weight-${weight}`])
    if (ellipsis) resolvedStyles.push(styles.ellipsis)
    if (textShadow) resolvedStyles.push(styles[`textShadow-${textShadow}`])
    if (className) resolvedStyles.push(className)

    return resolvedStyles.join(' ')
  }

  const createComponent = (params: ITypography) => {
    const componentClasses = resolveStyles(params)
    const { variant, children } = params

    const component = React.createElement(
      variantMapping[variant],
      { className: componentClasses },
      children
    )

    return component
  }

  return createComponent(props)
}

export default Typography