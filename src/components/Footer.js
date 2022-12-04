import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='container'>
        <div className='callTo'>Considere nos apoiar no <a href="https://www.patreon.com/cariocasulista">Patreon!</a></div>
        <div className='section'>
            <div className='dev footerTitle'> Links do Desenvolvedor
                <div className='links'>
                    <a style={{color:"black",textDecoration:"none"}} href="https://github.com/rimesestevao"><GitHubIcon/></a>
                    <a style={{color:"black",textDecoration:"none"}} href='https://www.linkedin.com/in/estevaoalmeida/'><LinkedInIcon/></a>
                    <a style={{color:"black",textDecoration:"none"}} href='https://www.linkedin.com/in/estevaoalmeida/'><AlternateEmailIcon/></a>
                </div>
            </div>
            <div className='verticalLign'></div>
            <div className='roteirista footerTitle'> Links da Roteirista
                <div className='links'>
                    <a style={{color:"black",textDecoration:"none"}} href="https://github.com/rimesestevao"><InstagramIcon/></a>
                    <a style={{color:"black",textDecoration:"none"}} href='https://www.linkedin.com/in/estevaoalmeida/'><LinkedInIcon/></a>
                    <a style={{color:"black",textDecoration:"none"}} href='https://www.linkedin.com/in/estevaoalmeida/'><AlternateEmailIcon/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer