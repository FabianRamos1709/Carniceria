import styled from "@emotion/styled"
import logo from "../img/logo1.jpeg"

const Logo = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
`

const Icono = styled.li`
    display: inline;
    padding: 10px;
    font-size: 30px;
`
const LineaSeparadora3 = styled.hr`
  margin-top: 0;
  margin-bottom: 5px;
  height: 2px;
  background-color: #E1AD01;
  width:250px;
`

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3 ">
        <div className="center row">
          <div className="col s4">
            <h5 className="white-text">Siguenos</h5>
            <LineaSeparadora3/>
            <ul>
              <Icono><a href="" className="social-icon white-text"> <i className="fa fa-facebook"></i></a></Icono>
              <Icono><a href="" className="social-icon white-text"> <i className="fa fa-twitter"></i></a></Icono>
              <Icono><a href="" className="social-icon white-text"> <i className="fa fa-instagram"></i></a></Icono>
              <Icono><a href="" className="social-icon white-text"> <i className="fa fa-youtube"></i></a></Icono>
              <Icono><a href="" className="social-icon white-text"> <i className="fa fa-google-plus"></i></a></Icono>
            </ul>
          </div>
          <div className="col s4">
            <Logo src={logo}/>
          </div>
          <div className="col s4 ">
            <ul>
              <li><h5>Contactenos</h5></li>
              <LineaSeparadora3/>
              <li>Direccion: Crr 1 #70-6</li>
              <li>telefono: 3134567876</li>
              <li>E-mail: lacarniceria@gmail.com</li>
            </ul>
          </div>   
        </div>
        <div className="footer-copyright">
            <div className="container center">
                © 2024 Copyright Text
            </div>
        </div>
    </footer>
  )
}

export default Footer