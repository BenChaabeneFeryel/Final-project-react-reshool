import React, { Component } from 'react'
import Container from '@mui/material/Container'
import { Image ,Segment, Grid, Header, Button, Icon, Divider, Form, Input, TextArea} from 'semantic-ui-react'
import images from '../../imgs/greys.jpg'

export default class InterMain extends Component {
  render() {
    return (
        <Container>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid id='produits' container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                            Nos Produits
                        </Header>
                        <br/>
                        <p style={{ fontSize: '1.33em' }}> 
                            Un texte est une série orale ou écrite de mots perçus comme constituant un
                            ensemble cohérent, porteur de sens et utilisant les structures propres à 
                            une langue (conjugaisons, construction et association des phrases…).
                            ... L'étude formelle des textes s'appuie sur la linguistique, qui est 
                            l'approche scientifique du langage.Un texte est une série orale ou écrite de mots perçus comme constituant un
                            ensemble cohérent, porteur de sens et utilisant les structures propres à 
                            une langue (conjugaisons, construction et association des phrases…).
                            L'étude formelle des textes s'appuie sur la linguistique, qui est 
                            l'approche scientifique du langage.
                        </p>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center' style={{ padding: '3em 0em' }}> 
                            <Button size='huge' color='green'>
                                En savoir plus
                                <Icon name='right arrow' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Divider inverted section />
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid id='mission' container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                            Notre Mission
                        </Header>
                        <Grid.Column floated='left' width={3}><Image src={images} size='large' circular /></Grid.Column>
                        <Grid.Column floated='center' width={3}><Image src={images} size='large' circular /></Grid.Column>
                        <Grid.Column floated='right' width={3}><Image src={images} size='large' circular /></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment style={{padding: '8em 0em' }} vertical>
                <Grid id='apropos' container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                            A Propos
                        </Header>
                        <br/><br/>
                        <Grid.Column width={7} textAlign='center' >
                            <p style={{ fontSize: '1.33em' , textAlign:'left' }}>
                            We can give your company superpowers to do things that they never thought possible.
                            Let us delight your customers and empower your needs... through pure data analytics.
                            </p>
                            {/* <Header as='h3' style={{ fontSize: '2em' }} textAlign='left'>
                                Titre 4
                            </Header> */}
                            <p style={{ fontSize: '1.33em', textAlign:'left' }}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                            bioengineered.
                            </p>
                            <Grid.Row>
                                <Grid.Column textAlign='center' style={{ padding: '3em 0em' }}> 
                                    <Button size='huge' color='green'>
                                        En savoir plus
                                        <Icon name='right arrow' />
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src={images} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Divider inverted section />
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <p style={{ fontSize: '1.33em' }}> 
                            Un texte est une série orale ou écrite de mots perçus comme constituant un
                            ensemble cohérent, porteur de sens et utilisant les structures propres à 
                            une langue (conjugaisons, construction et association des phrases…).
                            ... L'étude formelle des textes s'appuie sur la linguistique, qui est 
                            l'approche scientifique du langage.
                        </p>
                    </Grid.Row>
                </Grid>
            </Segment>   
            <Divider inverted section />
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid id='contact' container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={7} textAlign='left'>
                            <Header as='h1' style={{ fontSize: '3em' }} textAlign='left'>
                                Contact
                            </Header>
                            <p style={{ fontSize: '1.33em' }}> 
                                Vous pouvez nous trouver sur ces réseaux sociaux.<br/>
                                N'hésitez pas à nous contacter!<br/>
                                Nous sommes à votre service.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={8}>
                            <Form>
                                <Form.Group widths={2}>
                                    <Form.Field>
                                        <label>Nom</label>
                                        <Input fluid placeholder='Nom' />
                                    </Form.Field>
                                    <br/>
                                    <Form.Field>
                                        <label>Prénom</label>
                                        <Input fluid placeholder='Prénom' />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.TextArea 
                                        label='Message'
                                        placeholder='...' 
                                    />
                                </Form.Group>
                                <Button type='submit' color='green'>Submit</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>           
        </Container>
    )
  }
}
