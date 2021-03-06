import React, { Component } from 'react'
import { Container, Dropdown, Menu, Button, Visibility, Segment } from 'semantic-ui-react'
import NavCarousel from './NavCarousel'
import { BrowserRouter as Router, Link } from "react-router-dom"
import './Interheader.css'

export default class InterHeader extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        return (      
            <Visibility once={false} onBottomPassed={this.showFixedMenu} 
                onBottomPassedReverse={this.hideFixedMenu}>
                <Segment inverted textAlign='center' style={{ minHeight: 100, padding: '0em 0em' }} vertical>
                    <Menu fixed='true' inverted={!fixed} style={{ padding: '1em 1em' }} pointing={!fixed} secondary={!fixed} size='large' borderless>
                        <Container> 
                            <Menu.Item id='headertitle' href='#accueil' as='a' style={{ fontSize: '1.33em' }} position='left' header>
                                <i class="fas fa-recycle"></i>
                                RE:SCHOOL Ecology
                            </Menu.Item>
                            <Menu.Item as='a' href='#accueil' active>
                                Accueil
                            </Menu.Item>
                            <Dropdown item simple text='Produits' href='#produits'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Header>Header Item</Dropdown.Header>
                                    <Dropdown.Item>
                                        <i className='dropdown icon' />
                                        <span className='text'>Submenu</span>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item as='a' href='#mission'>Mission</Menu.Item>
                            <Menu.Item as='a' href='#partenaires'>Partenaires</Menu.Item>
                            <Menu.Item as='a' href='#apropos'>A Propos</Menu.Item>
                            <Menu.Item as='a' href='#contact'>Contact</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as={Link} to="/login" inverted={!fixed} color='green'>
                                    Espace Client
                                </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                    <NavCarousel/>
                </Segment>
            </Visibility>
        ) 
    }
}
