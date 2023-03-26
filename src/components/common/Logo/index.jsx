import LogoIcon from '../../../assets/images/svg/Logo.svg'
import { LogoContainer, LogoImage, LogoTypography } from "./styled";

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={LogoIcon} alt='logo do Rodrigo Moreira' />
      <LogoTypography><span>.</span>Rodrigo<span>()</span></LogoTypography>
    </LogoContainer>
  );
}