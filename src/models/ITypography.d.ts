interface ITypography {
  align?: AlignType,
  children: ReactNode,
  className?: string
  variant: TypographyVariantType
  weight?: WeightType
  textShadow?: 'default'
  ellipsis?: boolean
}

type AlignType = (
  'center' |
  'inherit' |
  'justify' |
  'left' |
  'right'
)

type TypographyVariantType = (
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'button' |
  'buttonTransparent' |
  'body' |
  'caption'
)

type WeightType = 'regular' | 'bold'