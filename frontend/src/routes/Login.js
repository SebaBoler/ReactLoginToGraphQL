import React from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import { gql, graphql } from 'react-apollo';
import LogoGenetix from "../4ls-logo-01.png";

class Register extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });

    console.log(response);
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container text>
        <div>
          <img src={LogoGenetix} alt="Logo 4LS Genetix" className="logo-genetix" align="center" />
        </div>
        <Header as="h1">Login</Header>
        <Input name="email" onChange={this.onChange} value={email} placeholder="Email" fluid />
        <Input
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    );
  }
}

const registerMutation = gql`
  mutation( $email: String!, $password: String!) {
    login(email: $email, password: $password) {token}
  }
`;

export default graphql(registerMutation)(Register);