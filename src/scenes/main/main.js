import React, { PureComponent } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProviderOld } from '@material-ui/core/es/styles/MuiThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DrawerMenu from '../../commons/drawerMenu/drawerMenu';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CategoriaIcon from '@material-ui/icons/Category';
import TipoTransacaoIcon from '@material-ui/icons/Transform';
import TransacaoIcon from '@material-ui/icons/MonetizationOn';

import { Context } from '../../commons/enums';
import Categoria from '../categoria/categoria';
import Transacao from '../transacao/transacao';
import TipoTransacao from '../tipo_transacao/tipo_transacao';

const contexts = {
  tipoTransacao: {
    title: 'Tipos Trans.',
    component: <TipoTransacao/>,
    link: '/tipoTransacao',
    iconMenu: <TipoTransacaoIcon/>
  },
  categoria: {
    title: 'Categorias',
    component: <Categoria/>,
    link: '/categoria',
    iconMenu: <CategoriaIcon/>
  },
  transacao: {
    title: 'Transações',
    component: <Transacao/>,
    link: '/transacao',
    iconMenu: <TransacaoIcon/>
  },
  home: {
    title: 'Home',
    link: '/',
    iconMenu: <HomeIcon/>
  }
};

const menuItems = [
  contexts.home,
  contexts.tipoTransacao,
  contexts.categoria,
  contexts.transacao
];

function getContextData(context) {

  switch (context) {

    case Context.CATEGORIA:
      return contexts.categoria;

    case Context.TRANSACAO:
      return contexts.transacao;

    case Context.TIPO_TRANSACAO:
      return contexts.tipoTransacao;

    default:
      return contexts.home;
  }
}

const defaultTheme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: blue
    }
 });

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };

    this.openCloseMenu = this.openCloseMenu.bind(this);
  };

  openCloseMenu(isOpen) {
    this.setState({
      ...this.state,
      isMenuOpen: !isOpen
    });
  }

  render() {
    const { classes, context } = this.props;
    const { title, component } = getContextData(context);
    const { isMenuOpen } = this.state;

    return (
      <main>
        <MuiThemeProviderOld theme={ defaultTheme }>
          <div className={ classes.root }>
            <AppBar position="static">
              <Toolbar>
                <IconButton className={ classes.menuButton } color="inherit" aria-label="Menu">
                  <MenuIcon
                    onClick={ () => this.openCloseMenu(isMenuOpen) }
                  />
                  <DrawerMenu
                    isOpen={ isMenuOpen }
                    openCloseMenu={ this.openCloseMenu }
                    menuItems={ menuItems }
                  />
                </IconButton>
                <Typography variant="h6" color="inherit" className={ classes.grow }>
                  { title }
                </Typography>
              </Toolbar>
            </AppBar>
          </div>

          { component }
        </MuiThemeProviderOld>
      </main>
    );
  }
}

export default withStyles(defaultTheme)(Main);
