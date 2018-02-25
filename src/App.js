import React, { PureComponent } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';


class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            items: []
        };
    }

    componentWillMount() {
        fetch('http://nflarrest.com/api/v1/team')
            .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        this.setState ({
                            isLoading: false,
                            items: result
                        });
                        console.log(this.state);
                    },
                    (error) => {
                        this.setState({
                            isLoading: true,
                            error
                        });
                    }
                )
    }

  render() {

        const {error, isLoading, items} = this.state;
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (isLoading) {
        //     return <div>Loading...</div>
        // } else {
        //     return (
        //         <ul>
        //             {items.map(item => (
        //                 <li key={item.Team}>
        //                     {item.Team} {item.Team_name}
        //                 </li>
        //             ))}
        //         </ul>
        //     )
        //
        // }

      return (

      <div className="App">
          <Header title="Mój pierwszy Reakcik"/>
            Home page
          {error &&
          <div>Error: {error.message}</div>}
          {isLoading &&
          <div>Loading...</div>}
          {!error &&
          ! isLoading &&
          <ul>
              {items.map(item =>
                  <li key={item.Team}>
                      {item.Team} {item.Team_name}
                  </li>
              )}
          </ul>}
          <Footer name="Zosia Subocz">
          </Footer>
      </div>
    );
  }
}

export default App;
