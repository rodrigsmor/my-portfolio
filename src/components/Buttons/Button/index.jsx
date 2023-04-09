import { ButtonWrapper, LinkWrapper } from "./styled"

export const Button = ({ type = 'button', children, theme = 'gradient', props }) => {
  const Element = type === 'button' ? ButtonWrapper : LinkWrapper;
  return (
    <>
      <Element { ...props } className={`${theme}`}>
        { children }
      </Element>
    </>
  )
}