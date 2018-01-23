import React, { Component } from 'react';
import MyCard from '../../Components/ProfileCard';
import Item from '../../Components/Items';
import { Container, Grid, Segment } from 'semantic-ui-react';
import format from 'date-fns/format';

class Profile extends Component {
    state = {
        loading: true,
        account: {}
    };

    componentWillMount = () => {
        let login = sessionStorage.getItem('isLoggedin');
        if (!login) {
            this.props.history.push('/login');
        }
    }

    componentDidMount = () => {
        let dob_format= format(sessionStorage.getItem('dob'),'MM-DD-YYYY');
        let joinDate_format= format(sessionStorage.getItem('joinDate'),'MM-DD-YYYY');
        this.setState({
            account: {
                username: sessionStorage.getItem('userName'),
                fullName: sessionStorage.getItem('fullName'),
                dob: dob_format,
                email: sessionStorage.getItem('email'),
                joinDate: joinDate_format
            }
        })
    }
    render() {
        return (
            <Container>
                <Grid text style={{ marginTop: '10em' }}>
                    <Grid.Row stretched>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            <Segment textAlign='center' color='blue'>
                                <MyCard account={this.state.account} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Segment textAlign='center' color='blue'>
                                <h1>Profile Details</h1>
                                <hr />
                                <h5>Username: {this.state.account.username}</h5>
                                <h5>Email: {this.state.account.email}</h5>
                                <h5>DOB: {this.state.account.dob}</h5>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Item />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}// end of class

export default Profile;